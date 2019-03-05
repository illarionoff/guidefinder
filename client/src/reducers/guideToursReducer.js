import {
  GET_TOURS,
  TOURS_LOADING,
  SET_CURRENT_TOUR,
  CLEAR_CURRENT_TOUR
} from "../actions/types";

const initialstate = {
  tours: [],
  tour: "",
  toursLoading: false
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case TOURS_LOADING:
      return {
        ...state,
        toursLoading: true
      };
    case GET_TOURS:
      return {
        ...state,
        tours: [...action.payload],
        toursLoading: false
      };
    case SET_CURRENT_TOUR:
      return {
        ...state,
        tour: action.payload,
        toursLoading: false
      };
    case CLEAR_CURRENT_TOUR: {
      return {
        ...state,
        tour: ""
      };
    }
    default:
      return state;
  }
}
