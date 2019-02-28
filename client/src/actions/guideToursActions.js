import axios from "axios";
import { GET_TOURS, TOURS_LOADING } from "./types";

export const getTours = () => dispatch => {
  dispatch(setToursLoading());
  axios
    .get("/api/tours/mytours")
    .then(res =>
      dispatch({
        type: GET_TOURS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TOURS,
        payload: {}
      })
    );
};

export const setToursLoading = () => {
  return {
    type: TOURS_LOADING
  };
};
