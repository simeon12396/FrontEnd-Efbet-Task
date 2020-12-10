import { makeHttpService } from "../../services/httpService";
import { FETCH_COMPANIES, FETCH_COMPANY_ADDRESSES } from "../types/manageStuffTypes";

export const setCompanies = payload => ({
  type: FETCH_COMPANIES,
  payload,
});

export const setCompanyAddresses = payload => ({
  type: FETCH_COMPANY_ADDRESSES,
  payload,
});

/** ASYNC FUNCTIONS */

export const fetchAllCompanies = () => {
  return async dispatch => {
    const companiesResponse = await makeHttpService("data/companies.json", "get");
    dispatch(setCompanies(companiesResponse));
  };
};

export const fetclAllCompanyAddresses = () => {
  return async dispatch => {
    const companyAddresses = await makeHttpService("data/company-addresses.json", "get");
    dispatch(setCompanyAddresses(companyAddresses));
  };
}