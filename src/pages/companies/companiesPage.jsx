import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/loading";
import { NavLink } from "react-router-dom";
import "./companies.scss";

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]);

  const companiesSelector = useSelector(state => state.manageStuffReducer.companies);

  useEffect(() => {
    setCompanies(companiesSelector);
  }, []);

  if (companies.length === 0) {
    return <Loading />;
  }

  return (
    <div className="companies">
      <h1 className="h1">The whole list of companies: </h1>
      {companies.map(c => (
        <NavLink to={`/company/${c.id}`}>
          <span className="h3">Company:</span>
          <span className="each_company">{c.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default CompaniesPage;
