import {
  GET_ALL_TOURS,
  ALL_TOURS_LOADING,
  SET_CURRENT_TOUR
} from "../actions/types";

const initialstate = {
  allTours: [],
  tour: "",
  allToursLoading: false
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case ALL_TOURS_LOADING:
      return {
        ...state,
        allToursLoading: true
      };
    case GET_ALL_TOURS:
      return {
        ...state,
        allTours: [...action.payload],
        allToursLoading: false
      };
    case SET_CURRENT_TOUR:
      return {
        ...state,
        tour: action.payload,
        allToursLoading: false
      };

    default:
      return state;
  }
}
