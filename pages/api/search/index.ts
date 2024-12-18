import type { NextApiRequest, NextApiResponse } from 'next';
import serviceConfig from '../config';
import searchMock from './search-mock.json';
import { formatMovies } from '../../../utils/formatters/moviesFormatter';

const {
    API_BASE_URL,
    API_KEY,
    USE_MOCKS
} =  process.env;

/**
 * Search movies
 * Reference: https://developer.themoviedb.org/reference/search-movie
 *
 * @export
 * @param {NextApiRequest} req
 * @param {(NextApiResponse<PaginatedMovies | ResponseError>)} res
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<PaginatedMovies | ResponseError>) {
    switch (req.method) {
        case 'GET':
            console.log(USE_MOCKS);

            if (USE_MOCKS && searchMock) {
                res.status(200).json(searchMock as unknown as PaginatedMovies)
                return
            }

            if (API_KEY == undefined) {
                res.status(422).end('API_KEY is required')
                return
            }

            const query = req.query as Record<string, string>;
            const queryParams = new URLSearchParams(query);

            // Required query params
            if (queryParams.get('query') == undefined) {
                res.status(422).end({ message: 'query is required' })
                return
            }

            queryParams.append('api_key', API_KEY)

            const API_URL = `${API_BASE_URL}/search/movie?${queryParams}`

            fetch(API_URL, {...serviceConfig})
                .then(resp => resp.json())
                .then(data => {
                    const formattedResponse = formatMovies(data)
                    res.status(200).json(formattedResponse)
                })
                .catch(error => res.status(500).json({ message: 'Failed to search movies', error }))
            break;

        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
