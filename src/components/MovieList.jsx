import React from "react";
import MovieItem from './MovieItem';

export default function MovieList(props) {
  const { movies, toggleWatchList } = props;
  return (
    <div className="row">
      {
        movies.map(movie => {
          return (
            <div key={movie.id} className="col-12 mb-4 col-sm-6 col-lg-4">
              <MovieItem movie={movie} toggleWatchList={toggleWatchList} />
            </div>
          )
        })
      }
    </div>
  );
}