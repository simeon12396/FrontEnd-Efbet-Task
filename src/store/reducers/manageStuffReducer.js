import { ASSIGN_NEW_EMPLOYEE, FETCH_COMPANIES, FETCH_COMPANY_ADDRESSES, FETCH_EMPLOYEES, FETCH_PROJECTS, UPDATE_PROJECT_EMPLOYEES, UPDATE_PROJECT_NAME } from "../types/manageStuffTypes";

const initialState = {
  companies: null,
  companyAddresses: null,
  employees: null,
  projects: null,
  isTheDataModified: false
};

const updateProjectName = (projects, payload) => {
  const foundProject = projects.find(projects => projects.id === payload.id);
  const otherProjects = projects.filter(projects => projects.id !== payload.id);
  const hasDifferentName = payload.name === foundProject.name ? foundProject.name : payload.name;

  return [...otherProjects, {...foundProject, name: hasDifferentName}]
};

const updateProjectEmployees = (projects, payload) => {
  const foundProject = projects.find(projects => projects.id === payload.projectId);
  const otherProjects = projects.filter(projects => projects.id !== payload.projectId);

  return [...otherProjects, {...foundProject, employeesId: payload.employeesId}]
};

const assignNewEmployeeWithinTheProject = (projects, payload) => {
  const foundProject = projects.find(projects => projects.id === payload.projectId);
  const otherProjects = projects.filter(projects => projects.id !== payload.projectId);

  return [...otherProjects, {...foundProject, employeesId: [...foundProject.employeesId, payload.newEmployeeId]}]
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
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employees: payload,
      };
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    case UPDATE_PROJECT_NAME:
      return {
        ...state, 
        projects: updateProjectName(state.projects, payload),
        isTheDataModified: true,
      }
    case UPDATE_PROJECT_EMPLOYEES: 
      return {
        ...state,
        projects: updateProjectEmployees(state.projects, payload),
        isTheDataModified: true,
      }
      case ASSIGN_NEW_EMPLOYEE: 
      return {
        ...state,
        projects: assignNewEmployeeWithinTheProject(state.projects, payload),
        isTheDataModified: true,
      }
    default:
      return initialState;
  }
};
