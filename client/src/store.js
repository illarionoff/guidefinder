import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Root reducer
import rootReducer from "./reducers";

// Middlewares
const middleware = [thunk];

// Initital state
const inititalState = {};

// Store
const store = createStore(
  rootReducer,
  inititalState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
