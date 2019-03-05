import {
  SET_CURRENT_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE
} from "../actions/types";

const initialstate = {
  profile: {},
  loading: false
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: {}
      };

    default:
      return state;
  }
}
