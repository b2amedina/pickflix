import { Movie } from "../../../types/movie";

export type MovieDto = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type MovieListDto = {
    page: number,
    results: MovieDto[],
    total_pages: number,
    total_results: number
}

export const movieDtoToMovie = (dto: MovieDto): Movie => ({
    backdropPath: dto.backdrop_path,
    genreIds: dto.genre_ids,
    id: dto.id,
    originalLanguage: dto.original_language,
    originalTitle: dto.original_title,
    overview: dto.overview,
    posterPath: dto.poster_path,
    releaseDate: dto.release_date,
    title: dto.title,
});

