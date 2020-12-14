import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../../components/common/loading/loading";
import { NavLink } from "react-router-dom";
import "./companies.scss";
import Typography from "../../components/common/typography/typography";

const CompaniesPage = () => {
  const [companies, setCompanies] = useState(null);

  const companiesSelector = useSelector(state => state.manageStuffReducer.companies);

  useEffect(() => {
    setCompanies(companiesSelector);
  }, []);

  if (!companies) {
    return <Loading />;
  }

  return (
    <div className="companies">
      <Typography variant="title">The whole list of companies:</Typography>
      {companies.map(c => (
        <NavLink to={`/company/${c.id}`} key={c.id} className="companies__nav-link">
          <Typography variant="primary-text">Company:</Typography>
          <Typography variant="tertiary-text">{c.name}</Typography>
        </NavLink>
      ))}
    </div>
  );
};

export default CompaniesPage;
