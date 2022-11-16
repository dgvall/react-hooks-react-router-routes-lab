import React from "react";
import { movies } from "../data";

function Movie({movie}) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <h3>{movie.time}</h3>
      <ul>
        {
         movie.genres.map((genre) => {
          return (
            <li
            key = {genre}
            >{genre}</li>
          )
         })
        }
      </ul>
    </div>
  )
}

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    {
      movies.map((movie) => {
        return (
          <Movie key = {movie.title} movie = {movie}/>
        )
      })
    }
  </div>
  )
}

export default Movies;
