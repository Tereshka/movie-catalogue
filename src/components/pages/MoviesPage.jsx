import React from "react";

import MovieContainer from '../Movies/MovieContainer';
import MovieWillWatchContainer from '../Movies/MovieWillWatchContainer';
import MovieTabs from '../Movies/MovieTabs';
import Pagination from '../Pagination/Pagination';
import YearSelector from '../Filters/YearSelector';
import GenresSelector from '../Filters/GenresSelector';
import {MovieContextProvider} from '../Movies/movieContext';

import CallApi from '../../api/api';

export default class MoviesPage extends React.Component {

  state = {
    movies: [],
    moviesWillWatch: [],
    moviesFavourite: [],
    genres: [],
    genresSelected: [],
    sortBy: 'popularity.desc',
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
    currentYear: 2020,
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
    const {user} = this.props;
    if (user) {
      this.getMoviesWatchList(user.id);
      this.getMoviesFavourite(user.id);
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
    if (prevProps.user !== this.props.user && this.props.user === null) {
      this.setState({
        moviesWillWatch: [],
        moviesFavourite: [],
      });
    }
    if (prevProps.user !== this.props.user && this.props.user !== null) {
      this.getMoviesWatchList(this.props.user.id);
      this.getMoviesFavourite(this.props.user.id);
    }
  }

  getMovies(page = 1) {
    const { sortBy, currentYear, genresSelected } = this.state;
    let genres = "";
    genresSelected.forEach(el => genres += el + ',');

    const queryStringParams = {
      sort_by: sortBy,
      page: page,
      primary_release_year: currentYear,
      with_genres: genres
    };

    CallApi.get('/discover/movie', { params: queryStringParams })
      .then(data => this.setState({ movies: data.results, totalPages: data.total_pages }));
  }

  getMoviesWatchList(userId) {
    const { sessionId} = this.props;
    CallApi.get(`/account/${userId}/watchlist/movies`, {params: {session_id: sessionId}})
      .then(data => this.setState({moviesWillWatch: data.results}));
  }

  getMoviesFavourite(userId) {
    const { sessionId} = this.props;
    CallApi.get(`/account/${userId}/favorite/movies`, {params: {session_id: sessionId}})
      .then(data => this.setState({moviesFavourite: data.results}));
  }

  getGenres() {
    CallApi.get('/genre/movie/list')
      .then(data => this.setState({ genres: data.genres }));
  }

  clearAllFilters = () => {
    this.setState({
      genresSelected: [],
      sortBy: 'popularity.desc',
      activePage: 1,
      currentYear: 2020,
    });
  }

  setFavouriteMovie = (movie, favorite) => {
    const {user, sessionId} = this.props;
    CallApi.post(`/account/${user.id}/favorite`, {
      params: {
        session_id: sessionId
      },
      body: {
        media_type: 'movie',
        media_id: movie.id,
        favorite: favorite,
      },
    }).then((res) => {
      if (res.status_code === 1 || res.status_code === 13) {
        this.toggleFavouriteMovie(movie, favorite);
      }
    });
  }

  setWatchList = (movie, watchlist) => {
    const {user, sessionId} = this.props;
    CallApi.post(`/account/${user.id}/watchlist`, {
      params: {
        session_id: sessionId
      },
      body: {
        media_type: 'movie',
        media_id: movie.id,
        watchlist: watchlist,
      },
    }).then((res) => {
      if (res.status_code === 1 || res.status_code === 13) {
        this.toggleWatchList(movie, watchlist);
      }
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

  toggleWatchList = (movie, watchlist) => {
    let newMoviesWillWatch;
    if (!watchlist) {
      newMoviesWillWatch = this.state.moviesWillWatch.filter(m => m.id !== movie.id);
    } else {
      newMoviesWillWatch = [...this.state.moviesWillWatch];
      newMoviesWillWatch.push(movie);
    }
    this.setState({ moviesWillWatch: newMoviesWillWatch });
  }

  toggleFavouriteMovie = (movie, favourite) => {
    let newMoviesFavourite;
    if (!favourite) {
      newMoviesFavourite = this.state.moviesFavourite.filter(m => m.id !== movie.id);
    } else {
      newMoviesFavourite = [...this.state.moviesFavourite];
      newMoviesFavourite.push(movie);
    }
    this.setState({ moviesFavourite: newMoviesFavourite });
  }

  onClickPage = (page) => {
    this.setState({ activePage: page });
    this.getMovies(page);
  }

  render() {
    const { movies, moviesWillWatch, sortBy, activePage, 
      totalPages, sortList, currentYear, yearList, genres, 
      genresSelected, moviesFavourite } = this.state;
    const {user} = this.props;
    return (
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
                <MovieContextProvider value={{
                  user: user,
                  moviesWillWatch: moviesWillWatch,
                  moviesFavourite: moviesFavourite,
                  setFavouriteMovie: this.setFavouriteMovie,
                  setWatchList: this.setWatchList,
                }}>
                  <MovieContainer movies={movies} />
                </MovieContextProvider>
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
    );
  }
}