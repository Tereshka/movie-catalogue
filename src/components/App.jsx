import React from "react";

import MovieList from './MovieList';
import MovieListWillWatch from './MovieListWillWatch';
import MovieTabs from './MovieTabs';
import Pagination from './Pagination';

class App extends React.Component {

  state = {
    movies: [],
    moviesWillWatch: [],
    sortBy: 'popularity.desc',
    apiURL: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
    activePage: 1,
    totalPages: 0,
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) {
      this.getMovies();
    }
  }

  getMovies(page = 1) {
    const {apiURL, apiKey, sortBy} = this.state;
    fetch(`${apiURL}discover/movie?api_key=${apiKey}&sort_by=${sortBy}&page=${page}`)
      .then(res => res.json())
      .then(data => this.setState({movies: data.results, totalPages: data.total_pages}));
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

  onClickPage = (page) => {
    this.setState({ activePage: page});
    this.getMovies(page);
  }

  render() {
    const { movies, moviesWillWatch, sortBy, activePage, totalPages } = this.state;
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
            <div className="row">
              <div className="col">
                <Pagination activePage={activePage} totalPages={totalPages} onClickPage={this.onClickPage}/>
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
