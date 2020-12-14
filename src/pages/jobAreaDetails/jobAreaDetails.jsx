import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/loading";
import { useState, useEffect } from "react";
import Typography from "../../components/common/typography/typography";

const JobAreaDetailsPage = () => {
    const { jobAreaName } = useParams();
    const [employeeCollaborationCounter, setEmployeeCollaborationCounter] = useState(0);
    const employeesSelector = useSelector(state => state.manageStuffReducer.employees);
    const workingEmployees = employeesSelector && employeesSelector.filter(p => p.jobArea === jobAreaName);
    const allProjectsDetailsSelector = useSelector(state => state.manageStuffReducer.projects);

    const findEmployeesCollaboration = () => {
        const employeesIds = allProjectsDetailsSelector.map(project => project.employeesId.map(id => workingEmployees.find(workingEmployee => {
            if(workingEmployee.id === id) {
                setEmployeeCollaborationCounter(currentState => currentState + 1);
            }
            return workingEmployee.id === id;
        })));

        return employeesIds;
    };
    
    useEffect(() => findEmployeesCollaboration(), [])

    if (!employeesSelector) {
        return <Loading />;
    };

    return(
        <div>
            <Typography variant="title">Job area details: {jobAreaName}</Typography>
            <div className="flex-center">
                <Typography variant="primary-text">The number of employees which are working in that area:</Typography>
                <Typography variant="secondary-text">{workingEmployees.length}</Typography>
            </div>
            <div className="flex-center">
                <Typography variant="primary-text">The number of employees with have a collaboration in the other projects:</Typography>
                <Typography variant="secondary-text">{employeeCollaborationCounter}</Typography>
            </div>
        </div>
    )
};

export default JobAreaDetailsPage;