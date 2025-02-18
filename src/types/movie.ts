export type Movie = {
    backdropPath: string,
    genreIds: number[],
    id: number,
    originalLanguage: string,
    originalTitle: string,
    overview: string,
    posterPath: string,
    releaseDate: string,
    title: string
}

export type MovieList = {
    page?: number,
    results?: Movie[],
    totalPages?: number,
    totalResults?: number
}