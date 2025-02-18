import { MovieList } from "../types/movie";
import { TheMovieDbRepository } from "./themoviedb/TheMovieDbRepository";
import repositoryEnvironment from "../../env.json"
import { WatchModeRepository } from "./watchmode/WatchModeRepository";

export enum RepositoryType {
    TMBD = "TMDB",
    WATCHMODE = "WATCHMODE"
}

export type RepositoryEnvironmentType = {
    [key in RepositoryType]: {
        baseUrl: string,
        apiKey: string
    }
}

export const env: RepositoryEnvironmentType = repositoryEnvironment as RepositoryEnvironmentType;

export const movieRepositoryFactory = (type: RepositoryType): MovieRepository => {
    switch (type) {
        case RepositoryType.TMBD:
            return new TheMovieDbRepository();
        case RepositoryType.WATCHMODE:
            return new WatchModeRepository();
        default:
            throw new Error("Invalid repository");
    }
}

export interface MovieRepository {
    getMovies: (params?: GetMoviesParams) => Promise<MovieList | undefined>;
}

export interface GetMoviesParams {
    page?: number,
    language?: string,
    region?: string,
    limit?: number,
}