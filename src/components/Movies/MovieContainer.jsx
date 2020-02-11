import React from "react";
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

export default function MovieContainer(props) {
  const { movies, toggleWatchList, setWatchList, user, moviesWillWatch, moviesFavourite } = props;
  return (
    <div className="row">
      {
        movies.map(movie => {
          return (
            <div key={movie.id} className="col-12 mb-4 col-sm-6 col-lg-4">
              <MovieItem user={user}
              movie={movie}
              moviesWillWatch={moviesWillWatch}
              moviesFavourite={moviesFavourite}
              toggleWatchList={toggleWatchList}
              setWatchList={setWatchList}/>
            </div>
          )
        })
      }
    </div>
  );
}

MovieContainer.defaultProps = {
  movies: [],
  toggleWatchList: [],
};

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired,
};