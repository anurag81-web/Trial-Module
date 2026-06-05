import Link from 'next/link';
import SearchBar from './Searchbar';

export default async function MoviesPage({ searchParams }) {
  const search = (await searchParams).search || 'batman';

  const res = await fetch(
    `https://www.omdbapi.com/?s=${search}&apikey=${process.env.OMDB_API_KEY}`
  );
  const data = await res.json();

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-3xl font-bold mb-6">Movie Search</h1>
      <SearchBar />
      {data.Search ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.Search.map((movie) => (
            <Link href={`/movies/${movie.imdbID}`} key={movie.imdbID}>
              <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 cursor-pointer">
                <img src={movie.Poster} alt={movie.Title} className="w-full rounded mb-2" />
                <h2 className="text-white font-semibold">{movie.Title}</h2>
                <p className="text-gray-400 text-sm">{movie.Year}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No movies found for "{search}"</p>
      )}
    </div>
  );
}