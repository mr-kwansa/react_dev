import '../App.css'
function MovieCard({ movie }) {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image'

    const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : 'TBA'
    const rating = typeof movie.vote_average === 'number' ? movie.vote_average.toFixed(1) : 'N/A'

    function FavoriteClickHandler() {
        // Implement favorite functionality here
    }
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border  bg-slate-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/60">
        <div className="relative h-72 w-full overflow-hidden bg-slate-200">
            <img
                src={posterUrl}
                alt={`${movie.title} Poster`}
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

            <button
                type="button"
                className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur transition hover:bg-rose-500 hover:text-white"
                onClick={FavoriteClickHandler}
            >
                + Favorite
            </button>

            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-amber-400 px-3 py-1 text-sm font-semibold text-slate-950 shadow-lg">
                <span>{rating}</span>
                <span className="text-xs uppercase tracking-[0.18em] text-slate-800">TMDB</span>
            </div>
        </div>

        <div className="flex flex-1 flex-col space-y-4 bg-slate-950 p-5 text-slate-100">
            <div className="flex items-start justify-between gap-3">
                <h3 className="line-clamp-2 text-lg font-bold leading-tight text-white">{movie.title}</h3>
                <span className="shrink-0 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
                    {releaseYear}
                </span>
            </div>

            <div className="flex-1">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Movie Overview</h3>
                <p className="line-clamp-4 text-sm leading-6 text-slate-300">
                    {movie.overview || 'No overview available for this movie yet.'}
                </p>
            </div>
        </div>
    </article>
  );
}


export default MovieCard; 
