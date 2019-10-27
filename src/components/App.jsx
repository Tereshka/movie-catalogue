import React from "react";
import { moviesData } from '../moviesData';

import MovieList from './MovieList';
import MovieListWillWatch from './MovieListWillWatch';

class App extends React.Component {

  state = {
    movies: moviesData,
    moviesWillWatch: [],
  }

  toggleWatchList = movie => {
    let newMoviesWillWatch;
    if (this.state.moviesWillWatch.find(m => m.id === movie.id)) {
      newMoviesWillWatch = this.state.moviesWillWatch.filter(m => m.id !== movie.id);
    } else {
      newMoviesWillWatch = [...this.state.moviesWillWatch];
      newMoviesWillWatch.push(movie);
    }
    
    this.setState({moviesWillWatch : newMoviesWillWatch});
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
