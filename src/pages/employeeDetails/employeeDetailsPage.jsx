import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/loading";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Typography from "../../components/common/typography/typography";

const EmployeeDetailsPage = () => {
    const { id } = useParams();
    const [jobParticipates, setJobParticipates] = useState([]);
    const employeesSelector = useSelector(state => state.manageStuffReducer.employees);
    const foundEmployee = employeesSelector && employeesSelector.find(p => p.id === id);
    const allProjectsDetailsSelector = useSelector(state => state.manageStuffReducer.projects);

    const findEmployeesCollaboration = () => {
        const employeesIds = allProjectsDetailsSelector.map(project => project.employeesId.map(id => {
            if(id === foundEmployee.id) {
                setJobParticipates(currState => [...currState, project.name])
            }
        }));

        return employeesIds;
    };
    
    useEffect(() => findEmployeesCollaboration(), [])

    if (!employeesSelector) {
        return <Loading />;
    };

    return(
        <div>
            <Typography variant="title">Project details regarding to employee:</Typography>
            <div>
                <Typography variant="primary-text">Name:</Typography>
                <Typography variant="secondary-text">{`${foundEmployee.firstName} ${foundEmployee.lastName}`}</Typography>
            </div>
            <div>
                <Typography variant="primary-text">Date of birth:</Typography>
                <Typography variant="secondary-text">{foundEmployee.dateOfBirth.slice(0, 10)}</Typography>
            </div>
            <div>
                <Typography variant="primary-text">Job title:</Typography>
                <Typography variant="secondary-text">{foundEmployee.jobTitle}</Typography>
            </div>
            <div>
                <Typography variant="primary-text">Job Area:</Typography>
                <NavLink to={`/job-area/${foundEmployee.jobArea}`} className="text-decoration-color">
                    <Typography variant="tertiary-text">{foundEmployee.jobArea}</Typography>
                </NavLink>
            </div>
            <div>
                <Typography variant="primary-text">Job Type:</Typography>
                <Typography variant="secondary-text">{foundEmployee.jobType}</Typography>
            </div>
            <div>
                <Typography variant="primary-text">Job Participation:</Typography>
                <Typography variant="secondary-text">{jobParticipates.join()}</Typography>
            </div>
        </div>
    )
};

export default EmployeeDetailsPage