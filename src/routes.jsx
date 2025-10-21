import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Movie from "./components/pages/Movie";
import Directors from "./components/pages/Directors";
import Actors from "./components/pages/Actors";

const routes = [
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  { path: "/movies/:id", element: <Movie /> },
  { path: "/directors", element: <Directors /> },
  { path: "/actors", element: <Actors /> },
];

export default routes;
