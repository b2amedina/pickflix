import { RootState } from "../store/store";

export const selectFetchMovieIsLoading = (state: RootState) => state.movie.fetchMovie?.isLoading ?? false;

export const selectFetchMovieError = (state: RootState) => state.movie.fetchMovie?.error;

export const selectNextPage = (state: RootState) => state.movie.nextPage;

export const selectMovies = (state: RootState) => state.movie.movies;

export const selectTotalMovies = (state: RootState) => state.movie.totalMovies ?? 0;