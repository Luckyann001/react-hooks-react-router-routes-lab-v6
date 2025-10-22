import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie({ movies = [] }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div>
        <NavBar />
        <h1>Movie not found</h1>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      <p>Genres:</p>
      {movie.genres.map((genre) => (
        <span key={genre}>{genre} </span>
      ))}
    </div>
  );
}

export default Movie;
