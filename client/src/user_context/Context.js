import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { LoginError, LoginSuccess, Logout } from "./Action";
import { Reducer } from "./Reducer";

const INITIAL_USER_STATE = JSON.parse(localStorage.getItem("data")) || {};

export const UserContext = createContext(INITIAL_USER_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, user_dispatch] = useReducer(Reducer, INITIAL_USER_STATE);

  const validateToken = async () => {
    console.log("validate token", state.data?.token);
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/welcome`, {
        headers: {
          "x-access-token": state.data?.token ?? "",
        },
      });

      if (res.status === 200) {
        localStorage.setItem(
          "data",
          JSON.stringify({ ...state.data, isLoggedIn: true })
        );
        user_dispatch(LoginSuccess({ token: res.data.token }));
      } else {
        user_dispatch(Logout());
      }
    } catch {
      // user_dispatch(Logout());
    }
  };

  useEffect(() => {
    console.log("SETTING LOCAL STORAGE");
    // validateToken();
  }, [state]);

  return (
    <UserContext.Provider value={{ state, user_dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
