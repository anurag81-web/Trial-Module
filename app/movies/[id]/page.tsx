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
        return <h1 className="text-xl font-bold text-center mt-10">Movie not found</h1>;
    }

    return (
        <div className="p-6 md:p-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="w-full md:w-1/3 flex-shrink-0">
                <img 
                    src={movie.Poster !== "N/A" ? movie.Poster : "/images/placeholder.png"} 
                    alt={movie.Title} 
                    className="rounded-2xl shadow-lg border border-border-color/60 w-full object-cover aspect-[2/3]" 
                />
            </div>
            <div className="flex-1 w-full">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">{movie.Title}</h1>
                <p className="text-foreground/85 leading-relaxed text-base md:text-lg mb-6">{movie.Plot}</p>
                <hr className="border-border-color/60 mb-6" />
                <div className="space-y-3">
                    <p className="text-sm text-muted">
                        <span className="font-semibold text-foreground mr-2">Year:</span>{movie.Year}
                    </p>
                    <p className="text-sm text-muted">
                        <span className="font-semibold text-foreground mr-2">Director:</span>{movie.Director}
                    </p>
                    <p className="text-sm text-muted">
                        <span className="font-semibold text-foreground mr-2">Rating:</span>{movie.imdbRating}
                    </p>
                </div>
            </div>
        </div>
    );
}
