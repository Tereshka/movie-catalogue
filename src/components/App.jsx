import React from "react";

import MovieContainer from './Movies/MovieContainer';
import MovieWillWatchContainer from './Movies/MovieWillWatchContainer';
import MovieTabs from './Movies/MovieTabs';
import Pagination from './Pagination/Pagination';
import YearSelector from './Filters/YearSelector';
import GenresSelector from './Filters/GenresSelector';
import Header from './Header';

import { fetchApi } from '../api/api.js';
import Cookie from 'universal-cookie';

const cookies = new Cookie();

class App extends React.Component {

  state = {
    user: null,
    sessionId: null,
    movies: [],
    moviesWillWatch: [],
    genres: [],
    genresSelected: [],
    sortBy: 'popularity.desc',
    apiURL: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
    activePage: 1,
    totalPages: 0,
    sortList: [
      {
        title: 'Popularity desc',
        sortBy: 'popularity.desc',
      },
      {
        title: 'Revenue desc',
        sortBy: 'revenue.desc',
      },
      {
        title: 'Release date desc',
        sortBy: 'release_date.desc',
      }
    ],
    currentYear: 2019,
    yearList: [
      2021,
      2020,
      2019,
      2018,
      2017,
      2016,
      2015,
    ],
  }

  componentDidMount() {
    const sessionId = cookies.get('session_id');
    if (sessionId) {
      fetchApi(`${this.state.apiURL}/account?api_key=${this.state.apiKey}&session_id=${sessionId}`)
        .then(user => {
          this.updateUser(user);
        });
    }
    
    this.getMovies();
    this.getGenres();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) {
      this.getMovies();
    }
    if (prevState.currentYear !== this.state.currentYear) {
      this.getMovies();
    }
    if (prevState.genresSelected !== this.state.genresSelected) {
      this.getMovies();
    }
  }

  updateUser = user => {
    this.setState({user});
  }
  updateSessionId = sessionId => {
    this.setState({sessionId});
    cookies.set('session_id', sessionId, {
      path: '/',
      maxAge: 2592000, // 30 days
    })
  }

  getMovies(page = 1) {
    const { apiURL, apiKey, sortBy, currentYear, genresSelected } = this.state;
    let genres = "";
    genresSelected.forEach(el => genres += el + ',');
    fetch(`${apiURL}/discover/movie?api_key=${apiKey}&sort_by=${sortBy}&page=${page}&primary_release_year=${currentYear}&with_genres=${genres}`)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.results, totalPages: data.total_pages }));
  }

  getGenres() {
    const { apiURL, apiKey } = this.state;
    fetch(`${apiURL}/genre/movie/list?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => this.setState({ genres: data.genres }));
  }

  clearAllFilters = () => {
    this.setState({
      genresSelected: [],
      sortBy: 'popularity.desc',
      activePage: 1,
      currentYear: 2019,
    });
  }

  onChangeSortBy = value => {
    this.setState({ sortBy: value, activePage: 1 });
  }

  onChangeYear = event => {
    this.setState({currentYear: parseInt(event.target.value), activePage: 1});
  }

  onChangeCheckbox = event => {
    let newGenres = [...this.state.genresSelected];
    const {checked, value} = event.target;
    if (checked) {
      newGenres.push(parseInt(value));
    } else {
      newGenres = this.state.genresSelected.filter(el => el !== parseInt(value));
    }
    this.setState({genresSelected: newGenres, activePage: 1});
	};

  toggleWatchList = movie => {
    let newMoviesWillWatch;
    if (this.state.moviesWillWatch.find(m => m.id === movie.id)) {
      newMoviesWillWatch = this.state.moviesWillWatch.filter(m => m.id !== movie.id);
    } else {
      newMoviesWillWatch = [...this.state.moviesWillWatch];
      newMoviesWillWatch.push(movie);
    }

    this.setState({ moviesWillWatch: newMoviesWillWatch });
  }

  onClickPage = (page) => {
    this.setState({ activePage: page });
    this.getMovies(page);
  }

  render() {
    const { user, movies, moviesWillWatch, sortBy, activePage, 
      totalPages, sortList, currentYear, yearList, genres, 
      genresSelected } = this.state;
    return (
      <div>
        <Header user={user} updateUser={this.updateUser} updateSessionId={this.updateSessionId}/>
        <div className="container">
          <div className="row mt-3">
            <div className="col-8">
              <div className="row mb-3">
                <div className="col">
                  <MovieTabs sortList={sortList} sortBy={sortBy} onChangeSortBy={this.onChangeSortBy} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <MovieContainer movies={movies} toggleWatchList={this.toggleWatchList} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Pagination activePage={activePage} totalPages={totalPages} onClickPage={this.onClickPage} />
                </div>
              </div>
            </div>
            <div className="col-4">
              <MovieWillWatchContainer movies={moviesWillWatch} />
              <button className="btn btn-primary btn-block mt-3" onClick={this.clearAllFilters}>Clear all filters</button>
              <YearSelector currentYear={currentYear} yearList={yearList} onChangeYear={this.onChangeYear} />
              <GenresSelector genres={genres} onChangeCheckbox={this.onChangeCheckbox} genresSelected={genresSelected}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
