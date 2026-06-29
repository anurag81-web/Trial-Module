import Link from 'next/link';
import SearchBar from './Searchbar';

interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
}

interface MoviesPageProps {
    searchParams: Promise<{ search?: string }>;
}

export default async function MoviesPage({ searchParams }: MoviesPageProps) {
    const search = (await searchParams).search || 'batman';

    const res = await fetch(
        `https://www.omdbapi.com/?s=${search}&apikey=${process.env.OMDB_API_KEY}`
    );
    const data = await res.json();

    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">Movie Search</h1>
            <SearchBar />
            {data.Search ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {data.Search.map((movie: Movie) => (
                        <Link href={`/movies/${movie.imdbID}`} key={movie.imdbID}>
                            <div className="bg-card border border-border-color/60 rounded-2xl p-4 hover:border-border-color/85 hover:-translate-y-1 transition-all duration-200 shadow-sm cursor-pointer h-full flex flex-col justify-between">
                                <div>
                                    <img 
                                        src={movie.Poster !== "N/A" ? movie.Poster : "/images/placeholder.png"} 
                                        alt={movie.Title} 
                                        className="w-full rounded-xl object-cover aspect-[2/3] mb-3" 
                                    />
                                    <h2 className="text-foreground font-semibold text-sm line-clamp-2">{movie.Title}</h2>
                                </div>
                                <p className="text-muted text-xs mt-1">{movie.Year}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="text-muted">No movies found for &quot;{search}&quot;</p>
            )}
        </div>
    );
}
