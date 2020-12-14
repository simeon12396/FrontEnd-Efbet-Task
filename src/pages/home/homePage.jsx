import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "../../components/common/typography/typography";
import { fetchAllCompanies, fetchAllCompanyAddresses, fetchEmployees, fetchProjects } from "../../store/actions/manageStuffActions";

const Homepage = () => {
  const dispatch = useDispatch();

  const makeFetchCondition = useSelector(state => state.manageStuffReducer.isTheDataModified);

  useEffect(() => {
    if(!makeFetchCondition) {
      dispatch(fetchAllCompanies());
      dispatch(fetchAllCompanyAddresses());
      dispatch(fetchEmployees());
      dispatch(fetchProjects());
    }

  }, []);

  return <Typography variant="title">Front End Efbet Task</Typography>
};

export default Homepage;
