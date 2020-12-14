import { combineReducers } from "redux";
import { manageStuffReducer, } from "../reducers/manageStuffReducer";

export const rootReducer = combineReducers({
  manageStuffReducer,
});
