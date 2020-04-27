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
      console.log(payload);
      cookies.set('session_id', payload.session_id, {
        path: '/',
        maxAge: 2592000, // 30 days
      });
      return {
        ...state,
        user: payload.user,
        sessionId: payload.session_id,
        isAuth: true,
      };

    case LOGOUT:
      cookies.remove('session_id');
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