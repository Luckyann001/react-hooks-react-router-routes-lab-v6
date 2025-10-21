import { createRoutesFromElements, Route } from "react-router-dom";
import Home from "./components/home";
import Movies from "./components/pages/Movies";
import Directors from "./components/pages/Directors";
import Actors from "./components/pages/Actors";
import Movie from "./components/MovieCard";
import App from "./App";

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="movies" element={<Movies />} />
    <Route path="directors" element={<Directors />} />
    <Route path="actors" element={<Actors />} />
    <Route path="movie/:id" element={<Movie />} />
  </Route>
);

export default routes;
