import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Chip from './Chip';

interface MovieProps {
    movie: Movie;
}

const FirstMovie: React.FC<MovieProps> = ({ movie }) => {
    const ratingColor = movie.vote_average >= 7.5 ? 'bg-green-500' : movie.vote_average >= 4 ? 'bg-yellow-500' : 'bg-red-500';

    const ratinClasses = [
        'bg-green-500 text-white text-xs py-1 px-2 rounded-full font-bold absolute top-3 left-3 shadow-lg',
        ratingColor
    ].join(' ').trim();

    let releaseYear;

    if (movie.release_date == '') {
        releaseYear = 'Not available';
    } else {
        const releaseDate = new Date(movie.release_date);
        releaseYear = releaseDate.getFullYear();
    }

    return (
        <div className='mb-5'>
            <Link
                href={`/movie/${movie.id}`}
                className='relative flex gap-8 mr-auto'>
                <div>
                    <Image
                        className='w-full rounded-md mb-3'
                        src={`${process.env.NEXT_PUBLIC_MOVIE_IMG_BASE_URL}/w500/${movie.poster_path}`}
                        alt={movie.title}
                        width={200}
                        height={300}/>
                    <Chip
                        text={movie.vote_average.toFixed(1)}
                        backgroundColor={ratinClasses}/>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-5xl text-white text-left'>{movie.title}</h2>
                    <Chip
                        text={releaseYear}
                        backgroundColor={'bg-blue-500 w-fit'}/>
                    <p className='text-white'>{movie.overview}</p>
                </div>
            </Link>
        </div>
    );
}

export default FirstMovie
