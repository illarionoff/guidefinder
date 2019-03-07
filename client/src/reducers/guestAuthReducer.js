import { SET_CURRENT_GUEST, DELETE_CURRENT_GUEST } from "../actions/types";

const initialstate = {
  guestAuthenticated: false,
  user: {}
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case SET_CURRENT_GUEST:
      return {
        ...state,
        guestAuthenticated: true,
        user: action.payload
      };
    case DELETE_CURRENT_GUEST:
      return {
        ...state,
        guestAuthenticated: false,
        user: {}
      };

    default:
      return state;
  }
}
