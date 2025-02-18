import { createSlice } from "@reduxjs/toolkit/react";
import { Movie } from "../types/movie"
import { fetchMovies } from "./moveThunks";
import { LoadingState } from "../store/loading";

type MovieState = {
  fetchMovie?: LoadingState,
  nextPage: number,
  movies: Movie[],
  totalPages?: number,
  totalMovies?: number
}

const initialState: MovieState = { nextPage: 1, movies: [] };

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.fetchMovie = { isLoading: true };
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        const fetchedPage = action.payload?.page ?? 1;
        const newMovies = action.payload?.results ?? [];

        state.nextPage = fetchedPage + 1; 
        state.movies = [ ...state.movies, ...newMovies ];
        state.totalPages = action.payload?.totalPages;
        state.totalMovies = action.payload?.totalResults;
        
        if (state.fetchMovie) state.fetchMovie.isLoading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.fetchMovie = { isLoading: false, error: action.error.message};
      })
  },
});

export default movieSlice;