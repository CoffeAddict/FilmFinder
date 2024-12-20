import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Chip from './Chip';

interface MovieProps {
    movie: Movie;
}

const MovieList: React.FC<MovieProps> = ({ movie }) => {
    const ratingColor = movie.vote_average >= 7.5 ? 'bg-green-500' : movie.vote_average >= 4 ? 'bg-yellow-500' : 'bg-red-500';

    const ratinClasses = [
        'bg-green-500 text-white text-xs py-1 px-2 rounded-full font-bold absolute top-3 left-3 shadow-lg',
        ratingColor
    ].join(' ').trim();

    return (
        <li className='transition-all duration-300 hover:scale-105 drop-shadow-sm hover:drop-shadow-2xl'>
            <Link
                href={`/movie/${movie.id}`}
                target='_blank'>
                <Image
                    className='w-full rounded-md mb-3'
                    src={`${process.env.NEXT_PUBLIC_MOVIE_IMG_BASE_URL}/w200/${movie.poster_path}`}
                    alt={movie.title}
                    width={200}
                    height={300}/>
                <Chip
                    text={movie.vote_average.toFixed(1)}
                    backgroundColor={ratinClasses}/>
                <h2 className='text-normal text-white text-left'>{movie.title}</h2>
            </Link>
        </li>
    );
}

export default MovieList
