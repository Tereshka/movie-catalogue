import React from 'react';
import { withMovie } from '../../hoc/withMovie';
import MovieCard from './MovieCard';

function MovieContainer(props) {
  const { movies } = props;
  return (
    <div className="row">
      {
        movies.map(movie => {
          return (
            <div key={movie.id} className="col-12 mb-4 col-sm-6 col-lg-4">
              <MovieCard movie={movie} />
            </div>
          )
        })
      }
    </div>
  );
}

export default withMovie(MovieContainer);