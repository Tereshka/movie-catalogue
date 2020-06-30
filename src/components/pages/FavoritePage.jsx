import React from 'react';
import { withMovie } from '../../hoc/withMovie';
import MovieContainer from '../Movies/MovieContainer';

function FavoritePage(props) {
  const { moviesFavourite } = props.movie;
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <MovieContainer movies={moviesFavourite} />
        </div>
      </div>
    </div>
  );
}

export default withMovie(FavoritePage);