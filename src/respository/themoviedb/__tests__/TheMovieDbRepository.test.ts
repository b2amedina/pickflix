import { TheMovieDbRepository } from "../TheMovieDbRepository";
import mockMovieList from "./mockJson/mockMovieList.json"

const mockFetch = jest.fn();
global.fetch = mockFetch;

describe("TMDB respotiory tests", () => {
    const repository = new TheMovieDbRepository();

    beforeEach(() => {
        mockFetch.mockClear();
    })

    it("verify getMovies", async () => {
        mockFetch.mockResolvedValue({
            json: () => Promise.resolve(mockMovieList),
            ok: true
        });

        const movieList = await repository.getMovies();

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(movieList).toBeDefined();
        expect(movieList!.results).toHaveLength(2);
        expect(movieList).toMatchObject({
            page: 1,
            results: expect.any(Array),
            totalPages: 48786,
            totalResults: 975704,
        });
    });
});