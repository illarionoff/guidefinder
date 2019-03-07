import { combineReducers } from "redux";
import guideAuthReducer from "./guideAuthReducer";
import guestAuthReducer from "./guestAuthReducer";
import guestToursReducer from "./guestToursReducer";
import guideProfileReducer from "./guideProfileReducer";
import guideToursReducer from "./guideToursReducer";

export default combineReducers({
  guideAuth: guideAuthReducer,
  guestAuth: guestAuthReducer,
  guideProfile: guideProfileReducer,
  guideTours: guideToursReducer,
  guestTours: guestToursReducer
});
