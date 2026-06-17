import React from 'react';
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

  return React.createElement(
    "div",
    { className: "p-4 md:p-6" },
    React.createElement(
      "h1",
      { className: "text-xl md:text-3xl font-bold mb-6" },
      "Movie Search"
    ),
    React.createElement(SearchBar, null),
    data.Search ? (
      React.createElement(
        "div",
        { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" },
        data.Search.map((movie: Movie) => (
          React.createElement(Link, { href: `/movies/${movie.imdbID}`, key: movie.imdbID },
            React.createElement(
              "div",
              { className: "bg-gray-800 rounded-lg p-3 hover:bg-gray-700 cursor-pointer" },
              React.createElement("img", { src: movie.Poster, alt: movie.Title, className: "w-full rounded mb-2" }),
              React.createElement("h2", { className: "text-white font-semibold" }, movie.Title),
              React.createElement("p", { className: "text-gray-400 text-sm" }, movie.Year)
            )
          )
        ))
      )
    ) : (
      React.createElement("p", { className: "text-gray-400" }, `No movies found for "${search}"`)
    )
  );
}