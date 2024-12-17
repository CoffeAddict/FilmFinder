import type { NextApiRequest, NextApiResponse } from 'next'

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse<Record<string, any>>
) {
    const { id } = req.query
    res.status(200).json({ id })
}

const movies: Record<string, any> = {
  results: [
    'movie1',
  ]
}