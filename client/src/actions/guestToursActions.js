import axios from "axios";
import {
  GET_ALL_TOURS,
  ALL_TOURS_LOADING,
  SET_CURRENT_TOUR
  //   CLEAR_CURRENT_TOUR
} from "./types";

export const getAllTours = () => dispatch => {
  dispatch(setAllToursLoading());
  axios
    .get("/api/guests/alltours")
    .then(res =>
      dispatch({
        type: GET_ALL_TOURS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_TOURS,
        payload: {}
      })
    );
};

export const setAllToursLoading = () => {
  return {
    type: ALL_TOURS_LOADING
  };
};

export const getCurrentTour = tour_id => dispatch => {
  dispatch(setAllToursLoading());
  axios
    .get(`/api/tours/${tour_id}`)
    .then(res =>
      dispatch({
        type: SET_CURRENT_TOUR,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: SET_CURRENT_TOUR,
        payload: {}
      })
    );
};
