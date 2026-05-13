function MovieCard({ movie }) {

    function FavoriteClickHandler() {
        // Implement favorite functionality here
    }
  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.posterUrl} alt={`${movie.title} Poster`} className="poster-image" />
        </div>
        <div className="movie-overlay">
            <button className="favorite-btn" onClick={FavoriteClickHandler}>buttonherer</button>
        </div>
        <div className="movie-info">
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-year">{movie.releasedate}</p>
            <p className="movie-rating">Rating: {movie.rating}</p>
        </div>
    </div>
  );
}


export default MovieCard; 