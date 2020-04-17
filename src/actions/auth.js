export const UPDATE_AUTH = 'UPDATE_AUTH';
export const LOGOUT = 'LOGOUT';

export const actionUpdateAuth = (payload) => {
  return {
    type: UPDATE_AUTH,
    payload,
  };
};

export const actionLogout = () => {
  return {
    type: LOGOUT,
  };
};