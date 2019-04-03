import axios from "axios";
import { GET_ALL_RESERVATIONS, ALL_RESERVATIONS_LOADING } from "./types";

export const addReservation = (tourData, history) => dispatch => {
  axios
    .post("/api/reservations", tourData)
    .then(res => {
      console.log(res);
      history.push("/");
    })
    .catch(err => console.log(err));
};

export const cancelReservation = (tourID, history) => dispatch => {
  axios
    .delete(`/api/reservations/${tourID}`)
    .then(res => {
      history.push("/");
    })
    .catch(err => console.log(err));
};

export const getAllReservations = () => dispatch => {
  dispatch(setAllReservationsLoading());
  axios
    .get("/api/reservations")
    .then(res =>
      dispatch({
        type: GET_ALL_RESERVATIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_RESERVATIONS,
        payload: {}
      })
    );
};

export const setAllReservationsLoading = () => {
  return {
    type: ALL_RESERVATIONS_LOADING
  };
};
