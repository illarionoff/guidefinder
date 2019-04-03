import {
  GET_ALL_RESERVATIONS,
  ALL_RESERVATIONS_LOADING,
  SET_CURRENT_RESERVATION
} from "../actions/types";

const initialstate = {
  allReservations: [],
  reservation: "",
  allReservationsLoading: false
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case ALL_RESERVATIONS_LOADING:
      return {
        ...state,
        allReservationsLoading: true
      };
    case GET_ALL_RESERVATIONS:
      return {
        ...state,
        allReservations: [...action.payload],
        allReservationsLoading: false
      };
    case SET_CURRENT_RESERVATION:
      return {
        ...state,
        reservation: action.payload,
        allReservationsLoading: false
      };

    default:
      return state;
  }
}
