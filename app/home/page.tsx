'use client';

import React, { Suspense, useState, useEffect, use } from 'react';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [paginatedMovies, setPaginatedMovies] = useState<PaginatedMovies>({
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0,
    });

    const handleSearch = (newSearchQuery: string) => {
        setSearchQuery(newSearchQuery);
    };

    const getMovies = async (page?: number) => {
        setIsLoading(true);

        const params = new URLSearchParams();
        params.append('page', page?.toString() || '1');

        if (!searchQuery) {
            const response = await fetch(`/api/movies?${params}`);
            const data = await response.json();

            setPaginatedMovies(data);
        } else {
            params.append('query', searchQuery);

            const response = await fetch(`/api/search?${params}`);
            const data = await response.json();

            setPaginatedMovies(data);
        }

        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const goToPage = (page: number) => {
        getMovies(page)
    };

    useEffect(() => {
        getMovies();
    }, [searchQuery])

    return (
        <main>
            <div className="flex justify-center items-center h-[40vh]">
                <Suspense fallback={<div>Loading...</div>}>
                    <SearchBar onSearch={handleSearch} />
                </Suspense>
            </div>
            <section className='flex justify-center items-start min-h-[50vh] mb-16'>
                {isLoading && <Loading/>}
                {!isLoading && <MovieList
                    paginatedMovies={paginatedMovies}
                    goToPage={goToPage}
                />}
            </section>
        </main>
    );
}
