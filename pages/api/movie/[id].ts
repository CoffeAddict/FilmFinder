import type { NextApiRequest, NextApiResponse } from 'next';
import serviceConfig from '../config';
import movieMock from './movie-mock.json';
import { formatMovie, formatMovies } from '../../../utils/formatters/moviesFormatter';

const {
    API_BASE_URL,
    API_KEY,
    USE_MOCKS
} =  process.env;

type ResponseError = {
    message: string
    error?: string
}

/**
 * Get movie details
 * Reference: https://developer.themoviedb.org/reference/movie-details
 *
 * @export
 * @param {NextApiRequest} req
 * @param {(NextApiResponse<PaginatedMovies | ResponseError>)} res
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<Movie | ResponseError>) {
    switch (req.method) {
        case 'GET':

            if (USE_MOCKS) {
                res.status(200).json(movieMock as unknown as Movie)
                return
            }

            if (API_KEY == undefined) {
                res.status(422).end('API_KEY is required')
                return
            }

            const query = req.query as Record<string, string>;
            const queryParams = new URLSearchParams(query);

            // Required query params
            if (queryParams.get('id') == undefined) {
                res.status(422).end({ message: 'movie_id is required' })
                return
            }

            // Extract movieId form query params
            const movieId = queryParams.get('id')
            queryParams.delete('id')

            queryParams.append('api_key', API_KEY)

            const API_URL = `${API_BASE_URL}/movie/${movieId}?${queryParams}&language=en-US`

            console.log('API_URL', API_URL);

            fetch(API_URL, {...serviceConfig})
                .then(resp => resp.json())
                .then(data => {
                    const formattedResponse = formatMovie(data)
                    res.status(200).json(formattedResponse)
                })
                .catch(error => res.status(500).json({ message: 'Failed to fetch movies', error }))
            break;

        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
