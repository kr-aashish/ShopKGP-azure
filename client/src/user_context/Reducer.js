export const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        data: action.payload,
        isLoggedIn: false,
      };
    case "LOGIN_SUCCESS":
      return {
        data: action.payload,
        isLoggedIn: true,
      };
    case "LOGIN_ERROR":
      return {
        data: null,
        isLoggedIn: false,
      };
    case "LOGOUT":
      return {
        data: null,
        isLoggedIn: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
