import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetMoviesParams, movieRepositoryFactory, RepositoryType } from "./movieRepository";

const movieRepository = movieRepositoryFactory(RepositoryType.TMBD);

export const fetchMovies = createAsyncThunk(
    "movie/fetchMovies",
    async (params?: GetMoviesParams) => {
        return await movieRepository.getMovies(params);
    }
)