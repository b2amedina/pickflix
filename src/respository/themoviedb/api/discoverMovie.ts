import { MovieListDto } from "../dto/movieDto";
import { getHeaders, getUrl } from "./utils";

type DiscoverMovieParams = {
  page?: number;
};

export const discoverMovie = async (params?: DiscoverMovieParams): Promise<MovieListDto> => {
  const url = getUrl("discover/movie");
  url.searchParams.append("page", params?.page?.toString() ?? "1");
  const response = await fetch(url.toString(), { headers: getHeaders() });
  if (!response.ok) {
    throw new Error(`WatchMode discoverMovie Error: ${response.status}`);
  }
  const data = await response.json();
  return data as MovieListDto;
};