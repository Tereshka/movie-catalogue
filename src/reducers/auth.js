import { UPDATE_AUTH, LOGOUT } from '../actions/auth';
import Cookie from 'universal-cookie';

const cookies = new Cookie();

const initialState = {
  user: null,
  sessionId: cookies.get('session_id'),
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case UPDATE_AUTH:
      cookies.set('session_id', payload.sessionId, {
        path: '/',
        maxAge: 2592000, // 30 days
      });
      return {
        ...state,
        user: payload.user,
        sessionId: payload.sessionId,
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

    default:
      return state;
  }
};