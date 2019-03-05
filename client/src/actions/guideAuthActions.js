import axios from "axios";
import setAuthToken from "./setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER, DELETE_CURRENT_USER } from "./types";

export const registerGuide = (userData, history) => dispatch => {
  axios
    .post("/api/guides/register", userData)
    .then(res => history.push("/guide/login"))
    .catch(err => console.log(err));
};

export const guideLoginAction = (userData, history) => dispatch => {
  axios
    .post("/api/guides/login", userData)
    .then(res => {
      console.log(res);
      //   save to local srtorage
      const { token } = res.data;
      // Set token to localstorage
      localStorage.setItem("jwtToken", token);
      // // Set token to auth header
      setAuthToken(token);
      // // Decode token to get user data
      const decoded = jwt_decode(token);
      // // set current user
      dispatch(setCurrentUser(decoded));
      history.push("/guide");
    })
    .catch(err => console.log(err));
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const guideLogoutAction = () => dispatch => {
  // remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future request
  setAuthToken(false);
  // Set current user to {} / set isAuthenticated to false
  dispatch({
    type: DELETE_CURRENT_USER
  });
};
