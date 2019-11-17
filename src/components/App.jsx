import React from "react";

import MovieList from './MovieList';
import MovieListWillWatch from './MovieListWillWatch';
import MovieTabs from './MovieTabs';

class App extends React.Component {

  state = {
    movies: [],
    moviesWillWatch: [],
    sortBy: 'popularity.desc',
    apiURL: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) {
      this.getMovies();
    }
  }

  getMovies() {
    const {apiURL, apiKey, sortBy} = this.state;
    fetch(`${apiURL}discover/movie?api_key=${apiKey}&sort_by=${sortBy}`)
      .then(res => res.json())
      .then(data => this.setState({movies: data.results}));
  }

  onChangeSortBy = value => {
    this.setState({sortBy: value});
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
    const { movies, moviesWillWatch, sortBy } = this.state;
    return (
      <div className="container">

        <div className="row mt-3">
          <div className="col-8">        
            <div className="row mb-3">
              <div className="col">
                <MovieTabs sortBy={sortBy} onChangeSortBy={this.onChangeSortBy}/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <MovieList movies={movies} toggleWatchList={this.toggleWatchList}/>
              </div>
            </div>
          </div>
          <div className="col-4">
            <MovieListWillWatch movies={moviesWillWatch}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
