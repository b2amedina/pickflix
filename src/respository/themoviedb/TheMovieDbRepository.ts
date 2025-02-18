import { MovieList } from "../../types/movie";
import { GetMoviesParams, MovieRepository } from "../movieRepository";
import { discoverMovie } from "./api/discoverMovie";
import { movieDtoToMovie } from "./dto/movieDto";

export class TheMovieDbRepository implements MovieRepository {

    async getMovies(params?: GetMoviesParams): Promise<MovieList | undefined> {
        let movieList: MovieList | undefined = undefined;
        const movieListDto = await discoverMovie(params);
        const movies = movieListDto.results.map((dto) => movieDtoToMovie(dto));
        movieList = {
            page: movieListDto.page,
            results: movies,
            totalPages: movieListDto.total_pages,
            totalResults: movieListDto.total_results
        };
        return movieList;
    }
}