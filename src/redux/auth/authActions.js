import * as types from './authTypes';
import CallApi from "../../api/api";
import { fetchMoviesFavorite, fetchMoviesWillWatch } from '../movie/movieActions';

export const login = ({username, password}) => async dispatch => {
  try {
    dispatch({
      type: types.REQUEST_LOGIN,
    });

    const token = await CallApi.get('/authentication/token/new');
    const tokenWithLogin = await CallApi.post('/authentication/token/validate_with_login', {
      body: {
        username: username,
        password: password,
        request_token: token.request_token,
      }
    });

    const session = await CallApi.post('/authentication/session/new', {
      body: {
        request_token: tokenWithLogin.request_token,
      }
    });

    dispatch(fetchAuth(session.session_id));
  } catch (error) {
    dispatch({
      type: types.REQUEST_LOGIN_ERROR,
      payload: error,
    });
    console.log('error', error);
  }
}

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
    dispatch(fetchMoviesFavorite({ user, session_id }));
    dispatch(fetchMoviesWillWatch({ user, session_id }));
  }).catch(error => {
    dispatch({
      type: types.FETCH_AUTH_ERROR,
      payload: error,
    });
  });
};

export const updateAuth = ({ user, session_id }) => ({
  type: types.FETCH_AUTH_SUCCESS,
  payload: {
    user,
    session_id,
  }
});

export const userLogout = session_id => dispatch => {
  dispatch({
    type: types.REQUEST_LOGOUT,
  });

  CallApi.delete('/authentication/session', { body: { session_id }})
    .then(() => dispatch(logout()))
    .catch(error => {
      dispatch({
        type: types.REQUEST_LOGOUT_ERROR,
        payload: error,
      });
    });
}

export const logout = () => {
  return {
    type: types.REQUEST_LOGOUT_SUCCESS,
  };
};

export const toggleLoginModal = () => {
  return {
    type: types.TOGGLE_LOGIN_MODAL,
  };
};

export const clearLoginErrors = () => {
  return {
    type: types.CLEAR_LOGIN_ERRORS,
  };
}