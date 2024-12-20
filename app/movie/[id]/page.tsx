import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Chip from '../../components/Chip';

interface MoviePageProps {
    params: {
        id: string;
    };
}

export default async function MoviePage({ params }: MoviePageProps) {
    const apiURL = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
    : 'http://localhost:3000/api'; // fallback for local development

    const { id } = params;

    const response = await fetch(`${apiURL}/movie/${id}`);
    const data = await response.json();

    const movie = data
    const releaseDate = new Date(movie.release_date);
    const releaseYear = releaseDate.getFullYear();
    const ratingColor = movie.vote_average >= 7.5 ? 'bg-green-500' : movie.vote_average >= 4 ? 'bg-yellow-500' : 'bg-red-500';

    return (
        <main className='max-w-[1024px] px-4 py-16 mx-auto flex flex-col gap-16'>
            <section className='flex flex-col md:flex-row gap-8 text-white'>
                <Image
                    className='rounded-md mx-auto'
                    src={`${process.env.NEXT_PUBLIC_MOVIE_IMG_BASE_URL}/w300/${movie.poster_path}`}
                    alt={movie.title}
                    width={300}
                    height={450}/>
                <div className='flex flex-col gap-4 flex-1'>
                    <h1 className='text-5xl font-bold'>{movie.title}</h1>
                    <ul className='flex gap-4 flex-wrap'>
                        <li>
                            <Chip
                                text={releaseYear.toString()}
                                backgroundColor='bg-blue-500'/>
                        </li>
                        <li>
                            <Chip
                                text={movie.vote_average.toFixed(1)}
                                backgroundColor={ratingColor}/>
                        </li>
                        {movie.genres.map(genre => (
                            <li key={genre.id}>
                                <Chip text={genre.name}/>
                            </li>
                        ))}
                    </ul>
                    <p className='max-w-xl'>{movie.overview}</p>
                </div>
            </section>
            <Link
                href={'/home'}
                className='h-fit w-fit font-bold hover:text-white hover:bg-transparent border-[1px] border-white py-2 px-5 rounded-full bg-white text-slate-800 transition-colors duration-300'>
                Go back
            </Link>
        </main>
    );
}
