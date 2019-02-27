import { combineReducers } from "redux";
import guideAuthReducer from "./guideAuthReducer";

export default combineReducers({
  guideAuth: guideAuthReducer
});
