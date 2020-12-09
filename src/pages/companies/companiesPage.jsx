import { useEffect, useState } from "react";
import { makeHttpService } from "../../services/httpService";
import "./companies.scss";
import { NavLink } from "react-router-dom";
import Loading from "../../components/loading/loading";

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await makeHttpService("data/companies.json", "get");

      setCompanies(result);
    };

    fetchData();
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
