import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "../components/common/loading/loading";
import MainLayout from "../layouts/mainLayout/mainLayout";

const HomePage = lazy(() => import("../pages/home/homePage"));
const CompaniesPage = lazy(() => import("../pages/companies/companiesPage"));
const CompanyPage = lazy(() => import("../pages/company/companyPage"));
const ProjectDetailsPage = lazy(() => import("../pages/projectDetails/projectDetailsPage"));
const EmployeeDetailsPage = lazy(() => import("../pages/employeeDetails/employeeDetailsPage"));
const JobAreaDetailsPage = lazy(() => import("../pages/jobAreaDetails/jobAreaDetails"));

const Routing = () => (
  <Router>
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/companies" component={CompaniesPage} />
          <Route exact path="/company/:id" component={CompanyPage} />
          <Route exact path="/project-details/:id" component={ProjectDetailsPage} />
          <Route exact path="/employee-details/:id" component={EmployeeDetailsPage} />
          <Route exact path="/job-area/:jobAreaName" component={JobAreaDetailsPage} />
        </Switch>
      </Suspense>
    </MainLayout>
  </Router>
);

export default Routing;
