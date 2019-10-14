import React from "react";
import { moviesData } from '../moviesData';

import MovieList from './MovieList';
import MovieListWillWatch from './MovieListWillWatch';

class App extends React.Component {

  state = {
    movies: moviesData,
    moviesWillWatch: [],
  }

  toggleWatchList = (movie) => {
    console.log(movie);
  }

  render() {
    const { movies, moviesWillWatch } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <MovieList movies={movies} toggleWatchList={this.toggleWatchList}/>
          </div>
          <div className="col-3">
            <MovieListWillWatch movies={moviesWillWatch}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
