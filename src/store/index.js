import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import getData from "./reducers/getData";

const rootReducer = combineReducers({
    getD: getData
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;