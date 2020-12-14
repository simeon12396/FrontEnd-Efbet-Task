import { makeHttpService } from "../../services/httpService";
import { ASSIGN_NEW_EMPLOYEE, FETCH_COMPANIES, FETCH_COMPANY_ADDRESSES, FETCH_EMPLOYEES, FETCH_PROJECTS, UPDATE_PROJECT_EMPLOYEES, UPDATE_PROJECT_NAME } from "../types/manageStuffTypes";

export const setCompanies = payload => ({
  type: FETCH_COMPANIES,
  payload,
});

export const setCompanyAddresses = payload => ({
  type: FETCH_COMPANY_ADDRESSES,
  payload,
});

export const setEmployees = payload => ({
  type: FETCH_EMPLOYEES,
  payload
});

export const setProjects = payload => ({
  type: FETCH_PROJECTS,
  payload
});

export const updateProjectname = payload => ({
  type: UPDATE_PROJECT_NAME,
  payload
});

export const updateProjectEmployees = payload => ({
  type: UPDATE_PROJECT_EMPLOYEES,
  payload
});

export const assignNewEmployee = payload => ({
  type: ASSIGN_NEW_EMPLOYEE,
  payload
});

/** ASYNC FUNCTIONS */

export const fetchAllCompanies = () => {
  return async dispatch => {
    const companiesResponse = await makeHttpService("data/companies.json", "get");
    dispatch(setCompanies(companiesResponse));
  };
};

export const fetchAllCompanyAddresses = () => {
  return async dispatch => {
    const companyAddresses = await makeHttpService("data/company-addresses.json", "get");
    dispatch(setCompanyAddresses(companyAddresses));
  };
};

export const fetchEmployees = () => {
  return async dispatch => {
    const employees = await makeHttpService("data/employees.json", "get");
    dispatch(setEmployees(employees));
  };
};

export const fetchProjects = () => {
  return async dispatch => {
    const projects = await makeHttpService("data/projects.json", "get");
    dispatch(setProjects(projects));
  };
};