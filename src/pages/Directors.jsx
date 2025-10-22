import NavBar from "../components/NavBar";

const directors = [
  {
    name: "Ryan Coogler",
    movies: ["Black Panther"],
  },
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls"],
  },
];

function Directors() {
  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;
