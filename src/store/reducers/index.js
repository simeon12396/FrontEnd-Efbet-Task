import { combineReducers } from "redux";
import { companiesReducer } from "../reducers/companiesReducer";

export const rootReducer = combineReducers({
  companies: companiesReducer,
});
