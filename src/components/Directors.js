import React from "react";
import { directors } from "../data";

function Director({director}) {
  return (
    <div>
      <h2>{director.name}</h2>
      <ul>
        {
          director.movies.map((movie) => {
            return (
              <li
              key = {movie}
              >{movie}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    {
      directors.map((director) => {
        return <Director key = {director.name} director = {director}/>
      })
    }
  </div>
  )
}

export default Directors;
