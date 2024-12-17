import type { NextApiRequest, NextApiResponse } from 'next'

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse<Record<string, any>>
) {
  res.status(200).json(movies)
}

const movies: Record<string, any> = {
  results: [
    'movie1',
  ]
}