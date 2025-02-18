import { env } from "../../movieRepository";

const BASE_URL = env.WATCHMODE.baseUrl;
const API_KEY = env.WATCHMODE.apiKey;

export const getUrl = (path: string) => {
    const url = new URL(`${BASE_URL}/${path}`);
    url.searchParams.append("apiKey", API_KEY);
    return url;
};
