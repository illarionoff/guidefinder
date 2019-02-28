import { combineReducers } from "redux";
import guideAuthReducer from "./guideAuthReducer";
import guideProfileReducer from "./guideProfileReducer";
import guideToursReducer from "./guideToursReducer";

export default combineReducers({
  guideAuth: guideAuthReducer,
  guideProfile: guideProfileReducer,
  guideTours: guideToursReducer
});
