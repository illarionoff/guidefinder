import {
  GET_GUIDE_RESERVATIONS,
  GUIDE_RESERVATIONS_LOADING
} from "../actions/types";

const initialstate = {
  guideReservations: [],
  reservation: "",
  guideReservationsLoading: false
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case GUIDE_RESERVATIONS_LOADING:
      return {
        ...state,
        guideReservationsLoading: true
      };
    case GET_GUIDE_RESERVATIONS:
      return {
        ...state,
        guideReservations: [...action.payload],
        guideReservationsLoading: false
      };

    default:
      return state;
  }
}
