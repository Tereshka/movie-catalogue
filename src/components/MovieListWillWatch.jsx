import React from "react";

export default function MovieListWillWatch(props) {
  const { movies } = props;
  return (
    <div className="row">
      <h4>Will watch {movies.length} movies</h4>
      <ul className="list-group">
        {
          movies.map((movie, index) => {
            return (
              <li key={index} className="list-group-item">{movie.title}</li>
            )
          })
        }
      </ul>
    </div>
  );
}