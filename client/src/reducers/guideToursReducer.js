import { GET_TOURS, TOURS_LOADING } from "../actions/types";

const initialstate = {
  tours: [],
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
        tours: state.tours.concat(action.payload),
        toursLoading: false
      };
    default:
      return state;
  }
}
