import React, {useEffect} from 'react';
import { withMovie } from '../../hoc/withMovie';

import MovieContainer from '../Movies/MovieContainer';
import MovieWillWatchContainer from '../Movies/MovieWillWatchContainer';
import MovieTabs from '../Movies/MovieTabs';
import Pagination from '../Pagination/Pagination';
import YearSelector from '../Filters/YearSelector';
import GenresSelector from '../Filters/GenresSelector';

function MoviesPage(props) {
  const { movies } = props.movie;
  const { clearCurrentMovie, fetchGenres, fetchMovies, clearAllFilters } = props.movieActions;

  useEffect(() => {
    clearCurrentMovie();
    fetchGenres();
    fetchMovies();
  }, []);

  const handleClearFilters = () => {
    clearAllFilters();
    fetchMovies();
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-8">
          <div className="row mb-3">
            <div className="col">
              <MovieTabs />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <MovieContainer movies={movies}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Pagination />
            </div>
          </div>
        </div>
        <div className="col-4">
          <MovieWillWatchContainer />
          <button className="btn btn-primary btn-block mt-3" onClick={handleClearFilters}>Clear all filters</button>
          <YearSelector />
          <GenresSelector />
        </div>
      </div>
    </div>
  );
};

export default withMovie(MoviesPage);