import React from "react";
import { actors } from "../data";

function Actor({actor}) {
  return (
    <div>
      <h2>{actor.name}</h2>
      <ul>
        {
          actor.movies.map((movie) => {
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

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    {
      actors.map((actor) => {
        return <Actor key = {actor.name} actor = {actor}/>
      })
    }
  </div>
  )
}

export default Actors;
