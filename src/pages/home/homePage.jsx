import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCompanies, fetclAllCompanyAddresses } from "../../store/actions/manageStuffActions";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCompanies());
    dispatch(fetclAllCompanyAddresses());
  }, []);

  return <h1 className="h1">Front End Efbet Task</h1>;
};

export default Homepage;
