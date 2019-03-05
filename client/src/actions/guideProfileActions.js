import axios from "axios";
import {
  SET_CURRENT_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE
} from "./types";

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profiles")
    .then(res =>
      dispatch({
        type: SET_CURRENT_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: SET_CURRENT_PROFILE,
        payload: {}
      })
    );
};

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

export const addProfile = (userData, history) => dispatch => {
  axios
    .post("/api/profiles", userData)
    .then(res => {
      console.log(res);
      history.push("/guide/myprofile");
    })
    .catch(err => console.log(err));
};

// Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
