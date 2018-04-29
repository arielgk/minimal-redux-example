import { combineReducers } from "redux";
import ajaxCallInProgress from "./ajaxStatusReducer";
import items from "./itemsReducer";

const rootReducers = combineReducers({
  ajaxCallInProgress,
  items
});

export default rootReducers;
