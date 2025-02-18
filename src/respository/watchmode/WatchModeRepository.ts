import { Movie, MovieList } from "../../types/movie";
import { GetMoviesParams, MovieRepository } from "../movieRepository";
import { getTitleDetails } from "./api/getTitleDetails";
import { listTitles } from "./api/listTitles";
import { titleDetailsDtoToMovie } from "./dto/titleDto";

const PAGE_SIZE = 20;

export class WatchModeRepository implements MovieRepository {

    async getMovies(params?: GetMoviesParams): Promise<MovieList | undefined> {
        let movieList: MovieList | undefined = undefined;
        const movies: Movie[] = []
        const titleListDto = await listTitles({ page: params?.page, limit: params?.limit ?? PAGE_SIZE });

        for (const title of titleListDto.titles) {
            const titeDetailsDto = await getTitleDetails({ id: title.id });
            movies.push(titleDetailsDtoToMovie(titeDetailsDto));
        }

        movieList = {
            page: titleListDto.page,
            results: movies,
            totalPages: titleListDto.total_pages,
            totalResults: titleListDto.total_results
        };

        return movieList;
    }
}