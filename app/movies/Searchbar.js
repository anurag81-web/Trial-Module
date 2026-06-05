'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        if (query.trim() === '') return;
        router.push(`/movies?search=${query}`);
    };

    return (
        <div className="flex gap-2 mb-6">
            <input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies..."
                className="border p-2 rounded text-white bg-gray-800 placeholder:text-gray-500 w-64"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Search
            </button>
        </div>
    );

}