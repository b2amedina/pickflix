import { env } from "../../movieRepository";

const BASE_URL = env.TMDB.baseUrl;
const API_KEY = env.TMDB.apiKey;

export const getUrl = (path: string) => {
    const url = new URL(path, BASE_URL);
    return url;
};

export const getHeaders = (): Headers => {
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${API_KEY}`);
    return headers;
}