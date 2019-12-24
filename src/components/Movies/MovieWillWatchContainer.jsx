import React from "react";

export default function MovieWillWatchContainer(props) {
  const { movies } = props;
  return (
    <div>
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

MovieWillWatchContainer.defaultProps = {
  movies: [],
};