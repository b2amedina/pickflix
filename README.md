# PickFlix

This project is a recommendation engine for streaming services

## Setup

1. You need to create an env.json file with API keys for the repository you wish to use (see [movieRepository.ts](./src/respository/movieRepository.ts))
1. The repository selection is currently in [movieThunk.ts](./src/respository/moveThunks.ts)


```
{
    "TMDB": {
        "baseUrl": "https://api.themoviedb.org/3",
        "apiKey": "<insert key>"
    },
    "WATCHMODE": {
        "baseUrl": "https://api.watchmode.com/v1",
        "apiKey": "<insert key>"
    }
}
```