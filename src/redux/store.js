import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// addition for redux debug
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { cookies } from '../utils/cookies';
import rootReducer from './rootReducer';
import { FETCH_AUTH_SUCCESS, REQUEST_LOGOUT_SUCCESS } from "./auth/authTypes";

const updateCookies = ({ dispatch, getState }) => next => action => {
  if (action.type === FETCH_AUTH_SUCCESS) {
    cookies.set('session_id', action.payload.session_id, {
      path: '/',
      maxAge: 2592000
    });
  }

  if (action.type === REQUEST_LOGOUT_SUCCESS) {
    cookies.remove('session_id');
  }

  return next(action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, updateCookies)
  )
);
export default store;