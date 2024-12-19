'use client';

import React, { Suspense } from 'react';
import SearchBar from '../components/SearchBar';

export default function Home() {
    const handleSearch = (searchQuery: string) => {
        console.log("👽 ~ handleSearch ~ searchQuery:", searchQuery)
    };

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <SearchBar onSearch={handleSearch} />
            </Suspense>
        </div>
    );
}

//     fetch('/api/search')
//         .then(res => res.json())
//         .then(data => console.log(data))

{/* TODO: Create hero component with search function */}
{/* TODO Create popular movies list */}
{/* TODO Create account form */}
{/* TODO Create movie details modal */}
{/* TODO Create popular movies list */}
{/* TODO Create movie details modal */}
