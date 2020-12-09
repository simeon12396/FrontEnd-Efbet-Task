import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "../components/loading/loading";
import MainLayout from "../layouts/mainLayout/mainLayout";

const HomePage = lazy(() => import("../pages/home/homePage"));
const CompaniesPage = lazy(() => import("../pages/companies/companiesPage"));
const CompanyPage = lazy(() => import("../pages/company/companyPage"));

const Routing = () => (
  <Router>
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/companies" component={CompaniesPage} />
          <Route exact path="/company/:id" component={CompanyPage} />
        </Switch>
      </Suspense>
    </MainLayout>
  </Router>
);

export default Routing;
