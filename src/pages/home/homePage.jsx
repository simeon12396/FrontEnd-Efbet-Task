import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCompanies } from "../../store/actions/companiesActions";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  return <h1 className="h1">Front End Efbet Task</h1>;
};

export default Homepage;
