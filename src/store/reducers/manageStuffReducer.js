import { FETCH_COMPANIES, FETCH_COMPANY_ADDRESSES } from "../types/manageStuffTypes";

const initialState = {
  companies: null,
  companyAddresses: null
};

export const manageStuffReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COMPANIES:
      return {
        ...state,
        companies: payload,
      };
    case FETCH_COMPANY_ADDRESSES:
      return {
        ...state,
        companyAddresses: payload,
      };
    default:
      return initialState;
  }
};
