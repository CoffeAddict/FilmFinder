'use client';

import SearchBar from '../components/SearchBar';

export default function Home() {
    const handleSearch = (searchQuery: string) => {
        console.log("👽 ~ handleSearch ~ searchQuery:", searchQuery)
    };

    return <div>
        <SearchBar onSearch={handleSearch} />

    </div>;
    {/* TODO Create popular movies list */}
    {/* TODO Create movie details modal */}
}

//     fetch('/api/search')
//         .then(res => res.json())
//         .then(data => console.log(data))

{/* TODO: Create hero component with search function */}
{/* TODO Create popular movies list */}
{/* TODO Create account form */}
{/* TODO Create movie details modal */}
