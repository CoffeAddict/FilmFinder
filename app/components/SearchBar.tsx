'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchBarProps {
    onSearch: (data: string) => void; // Callback function to handle search event
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams?.get('q') || '');
    const [previousSearchTerm, setPreviousSearchTerm] = useState(searchParams?.get('q') || '');

    // Handle the search event on form submit
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Update the URL with the new search term
        router.replace(`?q=${encodeURIComponent(searchTerm)}`);

        // Prevent the search term from being updated if it hasn't changed
        if (searchTerm === previousSearchTerm) return
        setPreviousSearchTerm(searchTerm);

        if (searchTerm) emitEvent(searchTerm);
    };

    const emitEvent = (searchQuery: string) => onSearch(searchQuery);

    useEffect(() => {
        // Get the search term from the URL on page load
        const query = searchParams?.get('q');
        if (query) emitEvent(query);

        // Prevent the search term from being updated if it hasn't changed
        if (searchTerm === previousSearchTerm) return
        setPreviousSearchTerm(searchTerm);
    }, []);

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar
