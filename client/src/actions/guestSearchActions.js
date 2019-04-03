import axios from "axios";
import { GET_SEARCH_RESULTS, SEARCH_LOADING } from "./types";

export const getSearchResults = place => dispatch => {
  dispatch(setSearchLoading());
  axios
    .get(`/api/tours/search/${place}`)
    .then(res =>
      dispatch({
        type: GET_SEARCH_RESULTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SEARCH_RESULTS,
        payload: {}
      })
    );
};

export const setSearchLoading = () => {
  return {
    type: SEARCH_LOADING
  };
};
