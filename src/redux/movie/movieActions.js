import * as types from './movieTypes';
import CallApi from "../../api/api";

export const startLoading = () => dispatch => {
  dispatch({type: types.START_LOADING});
}

export const stopLoading = () => dispatch => {
  dispatch({type: types.STOP_LOADING});
}

export const clearAllUserData = () => dispatch => {
  dispatch({type: types.CLEAR_ALL_USER_DATA});
}

export const fetchMoviesFavorite = ({ user, session_id }) => dispatch => {
  CallApi.get(`/account/${user.id}/favorite/movies`, {
    params: {
      session_id,
    }
  }).then(data => {
    dispatch(updateMoviesFavorite(data.results));
  });
};

export const updateMoviesFavorite = movies => {
  return {
    type: types.UPDATE_MOVIES_FAVORITE,
    payload: movies,
  };
};

export const fetchMoviesWillWatch = ({ user, session_id }) => dispatch => {
  CallApi.get(`/account/${user.id}/watchlist/movies`, {
    params: {
      session_id,
    }
  }).then(data => {
    dispatch(updateMoviesWillWatch(data.results));
  });
};

export const updateMoviesWillWatch = movies => {
  return {
    type: types.UPDATE_MOVIES_WILL_WATCH,
    payload: movies,
  };
};

export const fetchGenres = () => dispatch => {
  dispatch({
    type: types.FETCH_GENRES,
  });

  CallApi.get('/genre/movie/list')
    .then(data => 
      dispatch({
        type: types.FETCH_GENRES_SUCCESS,
        payload: data.genres,
      })
    ).catch(error =>
      dispatch({
        type: types.FETCH_GENRES_ERROR,
        payload: error,
      })
    );
}

export const fetchMovies = (page = 1) => (dispatch, getState) => {
  dispatch({
    type: types.FETCH_MOVIES,
  });

  const { sortBy, currentYear, genresSelected } = getState().movie;
  let genres = '';
  genresSelected.forEach(el => genres += el + ',');

  const queryStringParams = {
    sort_by: sortBy,
    page: page,
    primary_release_year: currentYear,
    with_genres: genres
  };

  CallApi.get('/discover/movie', { params: queryStringParams })
    .then(data => 
      dispatch({
        type: types.FETCH_MOVIES_SUCCESS,
        payload: {
          movies: data.results,
          totalPages: data.total_pages
        }
      })
    ).catch(error =>
      dispatch({
        type: types.FETCH_MOVIES_ERROR,
        payload: error,
      })
    );
}

export const setSortBy = value => dispatch => {
  dispatch({
    type: types.SET_SORT_BY,
    payload: value,
  });
}

export const setCurrentYear = value => dispatch => {
  dispatch({
    type: types.SET_CURRENT_YEAR,
    payload: value,
  });
}

export const setActivePage = value => dispatch => {
  dispatch({
    type: types.SET_ACTIVE_PAGE,
    payload: value,
  });
}

export const setSelectedGenres = ({checked, value}) => (dispatch, getState) => {
  let newGenres = [...getState().movie.genresSelected];
  if (checked) {
    newGenres.push(parseInt(value));
  } else {
    newGenres = getState().movie.genresSelected.filter(el => el !== parseInt(value));
  }

  dispatch({
    type: types.SET_SELECTED_GENRES,
    payload: newGenres,
  });
}

export const clearAllFilters = value => dispatch => {
  dispatch({
    type: types.CLEAR_ALL_FILTERS,
  });
}

export const setFavouriteMovie = (movie, favorite) => (dispatch, getState) => {
  const { user, sessionId } = getState().auth;
  const { moviesFavourite } = getState().movie;
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
      let newMoviesFavourite;
      if (!favorite) {
        newMoviesFavourite = moviesFavourite.filter(m => m.id !== movie.id);
      } else {
        newMoviesFavourite = [...moviesFavourite];
        newMoviesFavourite.push(movie);
      }
      dispatch(updateMoviesFavorite(newMoviesFavourite));
    }
  });
}

export const setWatchList = (movie, watchlist) => (dispatch, getState) => {
  const {user, sessionId} = getState().auth;
  const { moviesWillWatch } = getState().movie;
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
      let newMoviesWillWatch;
      if (!watchlist) {
        newMoviesWillWatch = moviesWillWatch.filter(m => m.id !== movie.id);
      } else {
        newMoviesWillWatch = [...moviesWillWatch];
        newMoviesWillWatch.push(movie);
      }
      dispatch(updateMoviesWillWatch(newMoviesWillWatch));
    }
  });
}

export const fetchMovieById = id => dispatch => {
  dispatch({
    type: types.START_LOADING,
  });
  dispatch({
    type: types.FETCH_MOVIE_BY_ID,
  });

  CallApi.get(`/movie/${id}`)
    .then(data => {
      dispatch({
        type: types.FETCH_MOVIE_BY_ID_SUCCESS,
        payload: data,
      });
      dispatch({
        type: types.STOP_LOADING,
      });
    }).catch(error => {
      dispatch({
        type: types.FETCH_MOVIE_BY_ID_ERROR,
        payload: error,
      });
      dispatch({
        type: types.STOP_LOADING,
      });
    });
}

export const clearCurrentMovie = () => dispatch => {
  dispatch({
    type: types.CLEAR_CURRENT_MOVIE,
  });
}

export const fetchMovieVideosById = id => dispatch => {
  dispatch({
    type: types.START_LOADING,
  });

  dispatch({
    type: types.FETCH_MOVIE_VIDEOS_BY_ID,
  });

  CallApi.get(`/movie/${id}/videos`)
    .then(data => {
      dispatch({
        type: types.FETCH_MOVIE_VIDEOS_BY_ID_SUCCESS,
        payload: data.results,
      });
      dispatch({
        type: types.STOP_LOADING,
      });
    }).catch(error => 
      dispatch({
        type: types.FETCH_MOVIE_VIDEOS_BY_ID_ERROR,
        payload: error,
      })
    );
}

export const fetchMovieActorsById = id => dispatch => {
  dispatch({
    type: types.START_LOADING,
  });

  dispatch({
    type: types.FETCH_MOVIE_ACTORS_BY_ID,
  });

  CallApi.get(`/movie/${id}/credits`)
    .then(data => {
      dispatch({
        type: types.FETCH_MOVIE_ACTORS_BY_ID_SUCCESS,
        payload: data.cast,
      });
      dispatch({
        type: types.STOP_LOADING,
      });
    }).catch(error => 
      dispatch({
        type: types.FETCH_MOVIE_ACTORS_BY_ID_ERROR,
        payload: error,
      })
    );
}