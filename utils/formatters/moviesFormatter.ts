export function formatMovies (data: any): PaginatedMovies {
    return {
        page: data.page || 0,
        total_pages: data.total_pages || 0,
        total_results: data.total_results || 0,
        results: data.results.map((movie: any) => {
            return {
                adult: movie.adult || false,
                backdrop_path: movie.backdrop_path || '',
                genres: movie.genres || [],
                id: movie.id || 0,
                original_language: movie.original_language || '',
                original_title: movie.original_title || '',
                overview: movie.overview || '',
                popularity: movie.popularity || 0,
                poster_path: movie.poster_path || '',
                release_date: movie.release_date || '',
                title: movie.title || '',
                video: movie.video || false,
                vote_average: movie.vote_average || 0,
                vote_count: movie.vote_count || 0,
            }
        })
    }
}