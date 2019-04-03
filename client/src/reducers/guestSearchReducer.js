import { GET_SEARCH_RESULTS, SEARCH_LOADING } from "../actions/types";

const initialstate = {
  searchResults: [],
  searchLoading: false
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case SEARCH_LOADING:
      return {
        ...state,
        searchLoading: true
      };
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: [...action.payload],
        searchLoading: false
      };
    default:
      return state;
  }
}
