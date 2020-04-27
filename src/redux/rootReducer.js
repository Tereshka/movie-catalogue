import { combineReducers } from 'redux';
import authReducer from './auth/authReducers';
import movieReducer from './movie/movieReducers';

export default combineReducers({
  auth: authReducer,
  movie: movieReducer,
});