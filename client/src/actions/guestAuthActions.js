import axios from "axios";
import setAuthToken from "./setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_GUEST, DELETE_CURRENT_GUEST } from "./types";

export const registerGuest = (userData, history) => dispatch => {
  axios
    .post("/api/guests/register", userData)
    .then(res => history.push("/guest/login"))
    .catch(err => console.log(err));
};

export const loginGuest = (userData, history) => dispatch => {
  axios
    .post("/api/guests/login", userData)
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
      dispatch(setCurrentGuest(decoded));
      history.push("/guest");
    })
    .catch(err => console.log(err));
};

// Set logged in user
export const setCurrentGuest = decoded => {
  return {
    type: SET_CURRENT_GUEST,
    payload: decoded
  };
};

// Log user out
export const guestLogoutAction = () => dispatch => {
  // remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future request
  setAuthToken(false);
  // Set current user to {} / set isAuthenticated to false
  dispatch({
    type: DELETE_CURRENT_GUEST
  });
};
