import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>Time: {movie.time} minutes</p>
      {movie.genres && (
        <ul>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      )}
      <Link to={`/movie/${movie.id}`}>View Info</Link>
    </div>
  );
}

export default MovieCard;
