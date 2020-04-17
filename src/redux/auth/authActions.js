import * as types from './authTypes';

export const updateAuth = (payload) => {
  return {
    type: types.UPDATE_AUTH,
    payload,
  };
};

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