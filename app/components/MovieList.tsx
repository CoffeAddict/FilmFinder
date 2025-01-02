import React from 'react';
import Movie from './Movie';
import FirstMovie from './FirstMovie';

interface MovieListProps {
    paginatedMovies: PaginatedMovies;
    goToPage: (page: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({ paginatedMovies, goToPage }) => {

    const emitEvent = (page: number) => goToPage(page);

    const firstMovieList = paginatedMovies.results[0];
    const restMovieList = { results: paginatedMovies.results.slice(1)};

    return (
        <div className='container'>
            {paginatedMovies.total_results != 0 &&
                <div className='flex flex-col items-center px-4'>
                    <section className='w-full'>
                        <FirstMovie movie={firstMovieList}/>
                    </section>
                    <ul className='w-full gap-x-8 gap-y-10 mb-8 grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))]'>
                        {restMovieList.results.map((movie, index) => (
                            <Movie  key={movie.id} movie={movie}/>
                        ))}
                    </ul>

                    <nav className='flex gap-8 items-center'>
                        <button
                            onClick={() => emitEvent(paginatedMovies.page - 1)}
                            className='h-fit min-w-28 font-bold hover:text-white hover:bg-transparent border-[1px] border-white py-2 px-5 rounded-full bg-white text-slate-800 transition-colors duration-300 disabled:opacity-30'
                            disabled={paginatedMovies.page === 1}
                            type='button'>
                            Previous
                        </button>
                        <span className='text-md text-white font-bold'>{paginatedMovies.page}</span>
                        <button
                            onClick={() => emitEvent(paginatedMovies.page + 1)}
                            className='h-fit min-w-28 font-bold hover:text-white hover:bg-transparent border-[1px] border-white py-2 px-5 rounded-full bg-white text-slate-800 transition-colors duration-300 disabled:opacity-30'
                            disabled={paginatedMovies.page === paginatedMovies.total_pages - 1}
                            type='button'>
                            Next
                        </button>
                    </nav>
                </div>
            }
            {paginatedMovies.total_results == 0 &&
                <h2 className='text-white text-2xl font-bold'>
                    No results found
                </h2>
            }
        </div>
    );
}

export default MovieList
