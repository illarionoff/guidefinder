import { combineReducers } from "redux";
import guideAuthReducer from "./guideAuthReducer";
import guestAuthReducer from "./guestAuthReducer";
import guestToursReducer from "./guestToursReducer";
import guideProfileReducer from "./guideProfileReducer";
import guideToursReducer from "./guideToursReducer";
import guestReservationReducer from "./guestReservationReducer";
import guideReservationReducer from "./guideReservationReducer";
import guestSearchReducer from "./guestSearchReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  guideAuth: guideAuthReducer,
  guestAuth: guestAuthReducer,
  guideProfile: guideProfileReducer,
  guideTours: guideToursReducer,
  guestTours: guestToursReducer,
  guestReservations: guestReservationReducer,
  guideReservations: guideReservationReducer,
  guestSearch: guestSearchReducer,
  errors: errorReducer
});
