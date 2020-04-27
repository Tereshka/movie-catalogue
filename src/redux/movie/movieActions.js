import * as types from './movieTypes';
import CallApi from "../../api/api";

export const fetchMoviesFavorite = ({ user, session_id }) => dispatch => {
  console.log(user, session_id);
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
  console.log(user, session_id);
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