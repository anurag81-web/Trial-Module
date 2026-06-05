export default async function MoviePage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`
  );
  const movie = await res.json();

  if (movie.Response === 'False') {
    return <h1>Movie not found</h1>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} className="rounded-lg mb-4 w-64"/>
      <p className="text-gray-300 mb-2">{movie.Plot}</p>
      <p className="text-gray-400">Year: {movie.Year}</p>
      <p className="text-gray-400">Director: {movie.Director}</p>
      <p className="text-gray-400">Rating: {movie.imdbRating}</p>
    </div>
  );
}