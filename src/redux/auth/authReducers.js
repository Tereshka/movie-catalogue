import * as types from './authTypes';
import { cookies } from '../../utils/cookies';

const initialState = {
  user: null,
  sessionId: cookies.get('session_id'),
  isAuth: false,
  showLoginModal: false,
  errors: null,
};

const authReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.FETCH_AUTH_SUCCESS:
      return {
        ...state,
        user: payload.user,
        sessionId: payload.session_id,
        isAuth: true,
      };

    case types.REQUEST_LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        sessionId: null,
        isAuth: false,
      };

    case types.TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: !state.showLoginModal,
      };

    case types.REQUEST_LOGIN_ERROR: 
      return {
        ...state,
        errors: {
          base: payload.status_message,
        },
      };

    case types.CLEAR_LOGIN_ERRORS:
      return {
        ...state,
        errors: null,
      };

    default:
      return state;
  }
};

export default authReducer;