import {
  FETCH_SUCCESS_AUTH,
  LOGOUT,
  TOGGLE_LOGIN_MODAL,
} from './authTypes';
import Cookie from 'universal-cookie';

const cookies = new Cookie();

const initialState = {
  user: null,
  sessionId: cookies.get('session_id'),
  isAuth: false,
  showLoginModal: false,
};

const authReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_SUCCESS_AUTH:
      return {
        ...state,
        user: payload.user,
        sessionId: payload.session_id,
        isAuth: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        sessionId: null,
        isAuth: false,
      };

    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: !state.showLoginModal,
      };

    default:
      return state;
  }
};

export default authReducer;