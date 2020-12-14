import { useSelector } from "react-redux";
import Loading from "../../components/common/loading/loading";
import { useParams } from "react-router-dom";
import "./companyPage.scss";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Typography from "../../components/common/typography/typography";

const CompanyPage = () => {
  const [currentCompany, setCurrentCompany] = useState(null);
  const [currentProjects, setCurrentProjects] = useState(null);

  const { id } = useParams();
  const companyAddressesSelector = useSelector(state => state.manageStuffReducer.companyAddresses);
  const companyProjectsSelector = useSelector(state => state.manageStuffReducer.projects);
  const foundCompany = companyAddressesSelector.find(c => c.companyId === id);
  const foundCurrentProjects = companyProjectsSelector.filter(c => c.companyId === id);

  useEffect(() => {
    setCurrentCompany(foundCompany);
    setCurrentProjects(foundCurrentProjects);
  }, []);

  if (!currentCompany && !currentProjects) {
    return <Loading />;
  }

  return(
    <div className="company">
      <Typography variant="title">Company's address:</Typography>
      <div>
        <Typography variant="primary-text">City:</Typography>
        <Typography variant="secondary-text">{currentCompany.city}</Typography>
      </div>
      <div>
        <Typography variant="primary-text">Country:</Typography>
        <Typography variant="secondary-text">{currentCompany.country}</Typography>
      </div>
      <div>
        <Typography variant="primary-text">Street:</Typography>
        <Typography variant="secondary-text">{currentCompany.street}</Typography>
      </div>
      <div>
        <Typography variant="primary-text">State:</Typography>
        <Typography variant="secondary-text">{currentCompany.state}</Typography>
      </div>

      <Typography variant="title">Company's address:</Typography>

      {currentProjects.length !== 0 ? currentProjects.map(p => (
        <div key={p.companyId}>
          <div>
          <Typography variant="primary-text">Name:</Typography>
            <NavLink className="company__project" to={`/project-details/${p.id}`}>
              <Typography variant="tertiary-text">{p.name}</Typography>
            </NavLink>
          </div>
        </div>)
        ) : <Typography variant="alert-text">Attention! The company doesn't contain any projects!</Typography>}
    </div>
  );
}; 

export default CompanyPage;
