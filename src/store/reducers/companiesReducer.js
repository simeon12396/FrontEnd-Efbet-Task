import { FETCH_COMPANIES } from "../types/companiesTypes";

const initialState = {
  companies: null,
};

export const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    default:
      return initialState;
  }
};
