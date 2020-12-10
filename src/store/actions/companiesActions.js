import { makeHttpService } from "../../services/httpService";
import { FETCH_COMPANIES } from "../types/companiesTypes";

export const setCompanies = payload => ({
  type: FETCH_COMPANIES,
  payload,
});

export const fetchCompanies = () => {
  return async dispatch => {
    const companiesResponse = await makeHttpService("data/companies.json", "get");
    dispatch(setCompanies(companiesResponse));
  };
};
