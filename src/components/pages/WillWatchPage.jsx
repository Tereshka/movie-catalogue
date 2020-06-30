import React from 'react';
import { withMovie } from '../../hoc/withMovie';
import MovieContainer from '../Movies/MovieContainer';

function WillWatchPage(props) {
  const { moviesWillWatch } = props.movie;
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <MovieContainer movies={moviesWillWatch} />
        </div>
      </div>
    </div>
  );
}

export default withMovie(WillWatchPage);