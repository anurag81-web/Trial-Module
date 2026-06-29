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
        <div className="flex gap-3 mb-8">
            <input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search movies..."
                className="bg-card border border-border-color text-foreground placeholder:text-muted rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition w-72"
            />
            <button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-medium transition-all text-sm cursor-pointer">
                Search
            </button>
        </div>
    );
}