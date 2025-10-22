// src/data.js
export const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: 2,
    title: "Black Panther",
    time: 134,
    genres: ["Action", "Adventure", "Sci-Fi"],
  },
];

export const actors = [
  { name: "Benedict Cumberbatch", movies: ["Doctor Strange"] },
  { name: "Chadwick Boseman", movies: ["Black Panther"] },
];

export const directors = [
  { name: "Scott Derrickson", movies: ["Doctor Strange"] },
  { name: "Ryan Coogler", movies: ["Black Panther"] },
];
