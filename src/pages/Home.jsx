import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home({ movies = [] }) {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </h2>
          <p>{movie.time} minutes</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
