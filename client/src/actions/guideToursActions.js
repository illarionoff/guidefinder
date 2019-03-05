import axios from "axios";
import {
  GET_TOURS,
  TOURS_LOADING,
  SET_CURRENT_TOUR,
  CLEAR_CURRENT_TOUR
} from "./types";

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

export const getCurrentTour = tour_id => dispatch => {
  dispatch(setToursLoading());
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

export const setToursLoading = () => {
  return {
    type: TOURS_LOADING
  };
};

export const addTour = (tourData, history) => dispatch => {
  axios
    .post("/api/tours", tourData)
    .then(res => {
      console.log(res);
      history.push("/guide/myprofile");
      dispatch({
        type: CLEAR_CURRENT_TOUR
      });
    })
    .catch(err => console.log(err));
};

export const editTour = (tour_id, tourData, history) => dispatch => {
  axios
    .post(`/api/tours/${tour_id}`, tourData)
    .then(res => {
      console.log(res);
      history.push("/guide/myprofile");
    })
    .catch(err => console.log(err));
};

export const deleteTour = (tour_id, history) => dispatch => {
  axios
    .delete(`/api/tours/${tour_id}`)
    .then(res => {
      console.log(res);
      history.push("/guide/myprofile");
    })
    .catch(err => console.log(err));
};
