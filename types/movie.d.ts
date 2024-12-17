interface MovieDetails {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: string
    budget: number
    genres: Genres[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompanies[]
    production_countries: ProductionCountries[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguages[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

interface Movie {
    adult: boolean
    backdrop_path: string
    genres: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

interface MovieSearchParams {
    query: string
    include_adult?: boolean,
    language?: string,
    primary_release_year?: string,
    page?: number,
    region?: string,
    year?: string,
}

interface PaginatedMovies {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number,
}

interface Genres {
    id: number
    name: string
}

interface SpokenLanguages {
    english_name: string
    iso_639_1: string
    name: string
}

interface ProductionCountries {
    iso_3166_1: string
    name: string
}

interface ProductionCompanies {
    id: number
    logo_path: string
    name: string
    origin_country: string
}