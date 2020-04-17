export const UPDATE_AUTH = 'UPDATE_AUTH';
export const LOGOUT = 'LOGOUT';
export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';

export const updateAuth = (payload) => {
  return {
    type: UPDATE_AUTH,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const toggleLoginModal = () => {
  return {
    type: TOGGLE_LOGIN_MODAL,
  };
};