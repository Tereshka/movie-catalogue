import * as types from './movieTypes';

const initialState = {
  moviesFavourite: [],
  moviesWillWatch: [],
};

const movieReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.UPDATE_MOVIES_FAVORITE:
      return {
        ...state,
        moviesFavourite: action.payload
      };
    case types.UPDATE_MOVIES_WILL_WATCH:
      return {
        ...state,
        moviesWillWatch: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;