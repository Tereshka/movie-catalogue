import * as types from './movieTypes';

const initialState = {
  errors: null,
  isLoading: false,
  moviesFavourite: [],
  moviesWillWatch: [],
  movies: [],
  genres: [],
  genresSelected: [],
  sortBy: 'popularity.desc',
  currentYear: new Date().getFullYear(),
  activePage: 1,
  totalPages: 0,
  currentMovie: null,
  currentMovieVideos: [],
  currentMovieActors: [],
};

const movieReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    
    case types.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case types.UPDATE_MOVIES_FAVORITE:
      return {
        ...state,
        moviesFavourite: payload,
      };

    case types.UPDATE_MOVIES_WILL_WATCH:
      return {
        ...state,
        moviesWillWatch: payload,
      };

    case types.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: payload,
      };

    case types.FETCH_GENRES_ERROR:
      return {
        ...state,
        errors: payload,
      };

    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload.movies,
        totalPages: payload.totalPages,
      };

    case types.SET_SORT_BY:
      return {
        ...state,
        sortBy: payload,
        activePage: 1,
      };

    case types.SET_CURRENT_YEAR:
      return {
        ...state,
        currentYear: payload,
        activePage: 1,
      };

    case types.SET_SELECTED_GENRES:
      return {
        ...state,
        genresSelected: payload,
        activePage: 1,
      };

    case types.SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: payload,
      };

    case types.CLEAR_ALL_FILTERS:
      return {
        ...state,
        genresSelected: [],
        sortBy: 'popularity.desc',
        activePage: 1,
        currentYear: 2020,
      };

    case types.FETCH_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        currentMovie: payload,
      };

    case types.CLEAR_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: null,
        currentMovieVideos: [],
        currentMovieActors: [],
      };

    case types.FETCH_MOVIE_BY_ID_ERROR:
      return {
        ...state,
        errors: payload,
      };

    case types.FETCH_MOVIE_VIDEOS_BY_ID_SUCCESS:
      return {
        ...state,
        currentMovieVideos: payload,
      };

    case types.FETCH_MOVIE_ACTORS_BY_ID_SUCCESS:
      return {
        ...state,
        currentMovieActors: payload,
      };

    case types.CLEAR_ALL_USER_DATA:
      return {
        ...state,
        moviesFavourite: [],
        moviesWillWatch: [],
      };

    default:
      return state;
  }
};

export default movieReducer;