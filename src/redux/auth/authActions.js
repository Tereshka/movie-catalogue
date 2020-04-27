import * as types from './authTypes';
import CallApi from "../../api/api";
import { fetchMoviesFavorite } from '../movie/movieActions';

export const fetchAuth = session_id => dispatch => {
  dispatch({
    type: types.FETCH_REQUEST_AUTH,
  });

  CallApi.get('/account', {
    params: {
      session_id,
    }
  }).then(user => {
    dispatch(updateAuth({ user, session_id }));
    // dispatch(fetchMoviesFavorite({ user, session_id }));
  }).catch(error => {
    dispatch({
      type: types.FETCH_ERROR_AUTH,
      payload: error,
    });
  });
};

export const updateAuth = ({ user, session_id }) => ({
  type: types.FETCH_SUCCESS_AUTH,
  payload: {
    user,
    session_id,
  }
});

export const logout = () => {
  return {
    type: types.LOGOUT,
  };
};

export const toggleLoginModal = () => {
  return {
    type: types.TOGGLE_LOGIN_MODAL,
  };
};