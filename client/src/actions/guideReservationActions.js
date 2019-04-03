import axios from "axios";
import { GET_GUIDE_RESERVATIONS, GUIDE_RESERVATIONS_LOADING } from "./types";

// export const addReservation = (tourData, history) => dispatch => {
//   axios
//     .post("/api/reservations", tourData)
//     .then(res => {
//       console.log(res);
//       history.push("/");
//     })
//     .catch(err => console.log(err));
// };

// export const cancelReservation = (tourID, history) => dispatch => {
//   console.log(tourID);
//   axios
//     .delete(`/api/reservations/${tourID}`)
//     .then(res => {
//       history.push("/");
//     })
//     .catch(err => console.log(err));
// };

export const getAllReservations = () => dispatch => {
  dispatch(setAllReservationsLoading());
  axios
    .get("/api/reservations/guide")
    .then(res =>
      dispatch({
        type: GET_GUIDE_RESERVATIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_GUIDE_RESERVATIONS,
        payload: {}
      })
    );
};

export const setAllReservationsLoading = () => {
  return {
    type: GUIDE_RESERVATIONS_LOADING
  };
};
