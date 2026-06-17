import React from 'react';

interface MoviePageProps {
  params: Promise<{ id: string }>;
}
export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;

  const res = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`
  );
  const movie = await res.json();

  if (movie.Response === 'False') {
    return React.createElement("h1", null, "Movie not found");
  }

  return React.createElement(
    "div",
    { className: "p-6 max-w-2xl mx-auto" },
    React.createElement(
      "h1",
      { className: "text-3xl font-bold mb-4" },
      movie.Title
    ),
    React.createElement("img", { src: movie.Poster, alt: movie.Title, className: "rounded-lg mb-4 w-64" }),
    React.createElement("p", { className: "text-gray-300 mb-2" }, movie.Plot),
    React.createElement("p", { className: "text-gray-400" }, "Year: ", movie.Year),
    React.createElement("p", { className: "text-gray-400" }, "Director: ", movie.Director),
    React.createElement("p", { className: "text-gray-400" }, "Rating: ", movie.imdbRating)
  );
}