import { SET_CURRENT_GUEST } from "../actions/types";

const initialstate = {
  guestAuthenticated: false,
  guest: {}
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case SET_CURRENT_GUEST:
      return {
        ...state,
        guestAuthenticated: true,
        guest: action.payload
      };

    default:
      return state;
  }
}
