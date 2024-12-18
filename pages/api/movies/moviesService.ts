import { formatObjectForParams } from '../../../utils/helpers';
import serviceConfig from '../config'

const {
    API_BASE_URL
} =  process.env;

/**
 * Get movies list
 * Reference: https://developer.themoviedb.org/reference/discover-movie
 *
 * @export
 * @return {*}  {Promise<PaginatedMovies>}
 */
export async function getMovies (): Promise<PaginatedMovies | undefined> {
    try {
        console.log('API_BASE_URL', API_BASE_URL);

        // TODO implement fetching data from API
        const resp = await fetch(`${API_BASE_URL}/discover/movie`, {...serviceConfig})

        if (!resp.ok) throw new Error('Failed to get movies')

        const data = await resp.json()

        console.log("👽 ~ getMovies ~ data:", data)
        // TODO format data response

        return data
    } catch (error) {
        console.log(error)
    }
}

/**
 * Search movies by query
 * Reference: https://developer.themoviedb.org/reference/search-movie
 * @export
 * @param {MovieSearchParams} params
 * @return {*} Movie[]
 */
export async function searchMovies (params: MovieSearchParams): Promise<Movie[] | undefined> {
    try {

        const queryParams = new URLSearchParams(formatObjectForParams(params))

        // TODO implement fetching data from API
        const resp = await fetch(`${API_BASE_URL}/movies?${queryParams}`, {...serviceConfig})

        if (!resp.ok) throw new Error('Failed to search movies')

        const data = await resp.json()
        // TODO format data response

        return data
    } catch (error) {
        console.log(error)
    }
}

/**
 * Get movie details by id
 * Reference: https://developer.themoviedb.org/reference/movie-details
 *
 * @export
 * @param {string} movieId
 * @return {*} Movie
 */
export async function getMovieDetails (movieId: string): Promise<MovieDetails | undefined> {
    try {

        // TODO implement fetching data from API
        const resp = await fetch(`${API_BASE_URL}/movie/${movieId}`, {...serviceConfig})

        if (!resp.ok) throw new Error('Failed to get movie details')

        const data = await resp.json()
        // TODO format data response

        return data as MovieDetails
    } catch (error) {
        console.log(error)
    }
}