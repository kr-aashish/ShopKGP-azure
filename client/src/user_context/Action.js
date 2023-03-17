export const LoginStart = () => {
  return {
    type: "LOGIN_START",
  };
};

export const LoginSuccess = (user) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: user,
  };
};

export const UpdateUser = (user) => {
  return {
    type: "UPDATE_USER",
    payload: user,
  };
};

export const LoginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
};

export const Logout = () => {
  return {
    type: "LOGOUT",
  };
};
