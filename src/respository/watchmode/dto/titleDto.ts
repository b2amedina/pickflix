import { Movie } from "../../../types/movie";

export type TitleDto = {
    id: number,
    title: string,
    year: number,
    imdb_id: string,
    tmdb_id: number,
    tmdb_type: string,
    type: string
}

export type TitleListDto = {
    page: number,
    titles: TitleDto[],
    total_pages: number,
    total_results: number
}

export type TitleDetailsDto = {
    id: number,
    title: string,
    original_title: string,
    plot_overview: string,
    type: string,
    runtime_minutes: number,
    year: number,
    end_year: number,
    release_date: string,
    imdb_id: string,
    tmdb_id: number,
    tmdb_type: string,
    genres: number[],
    genre_names: string[],
    user_rating: number,
    critic_score: number,
    us_rating: string,
    poster: string,
    backdrop: string,
    original_language: string,
    similar_titles: number[],
    networks: number[],
    network_names: string[],
    trailer: string,
    trailer_thumbnail: string,
    relevance_percentile: number,
    sources: SourceDto[]
}

export type SourceDto = {
    source_id: number,
    name: string,
    type: string,
    region: string,
    ios_url: string,
    android_url: string,
    web_url: string,
    format: string,
    price: number | null,
    seasons: number,
    episodes: number
}

export const titleDetailsDtoToMovie = (dto: TitleDetailsDto): Movie => ({
    backdropPath: dto.backdrop,
    genreIds: dto.genres,
    id: dto.id,
    originalLanguage: dto.original_language,
    originalTitle: dto.original_title,
    overview: dto.plot_overview,
    posterPath: dto.poster,
    releaseDate: dto.release_date,
    title: dto.title,
});

