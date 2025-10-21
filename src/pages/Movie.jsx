import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
