'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchBarProps {
    onSearch: (data?: string) => void; // Callback function to handle search event
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams?.get('q') || '');
    const [formFocused, setFormFocused] = useState(false);
    const [previousSearchTerm, setPreviousSearchTerm] = useState(searchParams?.get('q') || '');

    const searchBarClasses = [
        'py-4 px-8 rounded-full gap-4 flex transition-all duration-300',
        formFocused ? 'bg-transparent border-white border-[1px] text-white' : 'bg-white text-black'
    ].join(' ').trim();

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

    const emitEvent = (searchQuery?: string) => onSearch(searchQuery);

    useEffect(() => {
        // Get the search term from the URL on page load
        const query = searchParams?.get('q') || undefined;
        emitEvent(query);
    }, []);

    return (
        <form onSubmit={handleSearch}>
            <div className={searchBarClasses}>
                <input
                    className='focus:outline-none bg-transparent transition-colors duration-100'
                    type="text"
                    value={searchTerm}
                    onFocus={(e) => setFormFocused(true)}
                    onBlur={(e) => setFormFocused(false)}
                    onChange={(e) => setSearchTerm(e.target.value.trim())}
                    placeholder="Lord of the Rings..."
                />
                <button
                    className='font-bold'
                    type="submit">Search</button>
            </div>
        </form>
    );
}

export default SearchBar
