import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../components/common/loading/loading";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./projectDetailsPage.scss";
import { useDispatch } from "react-redux";
import { updateProjectEmployees, updateProjectname, assignNewEmployee } from "../../store/actions/manageStuffActions";
import Typography from "../../components/common/typography/typography";
import Dropdown from "../../components/common/dropdown/dropdown";

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const allProjectsDetailsSelector = useSelector(state => state.manageStuffReducer.projects);
    const employeesSelector = useSelector(state => state.manageStuffReducer.employees);
    const foundProjectDetails = allProjectsDetailsSelector && allProjectsDetailsSelector.find(p => p.id === id);
    const matchedEmployees = foundProjectDetails.employeesId.length !== 0 && foundProjectDetails.employeesId.map(foundEmployee => employeesSelector.find(e => e.id === foundEmployee));
    const [projectName, setProjectName] = useState(foundProjectDetails.name);
    const [newEmployeeId, setNewEmployeeId] = useState(employeesSelector[0].id);
    const dispatch = useDispatch();

    if (!allProjectsDetailsSelector) {
        return <Loading />;
    };

    const onChangeProjectName = e => setProjectName(e.target.value);
    const onClickName = e => {
        e.preventDefault();
        dispatch(updateProjectname({ id, name: projectName }))
    };
    const removeEmployee = (id) => {
        const updatedProjectEmployees = foundProjectDetails.employeesId.filter(foundEmployee => id !== foundEmployee);
        dispatch(updateProjectEmployees({ employeesId: updatedProjectEmployees, projectId: foundProjectDetails.id }))
    };
    const onChangeNewEmployee = e => setNewEmployeeId(e.target.value);
    const onClickNewEmployee = (e) => {
        e.preventDefault();
        dispatch(assignNewEmployee({ projectId: foundProjectDetails.id, newEmployeeId }))
    };

    const removeIconSrc = "https://icons-for-free.com/iconfiles/png/512/cercle+close+delete+dismiss+remove+icon-1320196712448219692.png";

    return (
        <div className="project-details">
            <Typography variant="title">Project details about the project:</Typography>
            <form className="project-details__form">
                <div className="project-details__preserved-div">
                    <Typography variant="primary-text">Name:</Typography>
                    <input type="text" value={projectName} onChange={onChangeProjectName} className="project-details__input"/>
                </div>

                <button type="submit" onClick={onClickName} className="project-details__submit">Submit</button>
            </form>
            <div className="project-details__preserved-div">
                <Typography variant="primary-text">Department:</Typography>
                <Typography variant="secondary-text">{foundProjectDetails.department}</Typography>
            </div>
            <form className="project-details__form">
                <div className="project-details__preserved-div">
                    <Typography variant="primary-text">Assign new employee:</Typography>
                    <Dropdown name="employee" onChange={onChangeNewEmployee} options={employeesSelector} defaultValue={newEmployeeId} />
                </div>

                <button type="submit" onClick={onClickNewEmployee} className="project-details__submit">Submit</button>
            </form>
            <div className="project-details__employees-container">
                <Typography variant="primary-text">Employees:</Typography>

                {matchedEmployees ? matchedEmployees.map(projectEmployee => (
                    <div className="project-details__employee-container" key={projectEmployee.id}>
                        <Typography variant="primary-text">Name:</Typography>
                        <NavLink to={`/employee-details/${projectEmployee.id}`} className="company__project">{`${projectEmployee.firstName} ${projectEmployee.lastName}`}</NavLink>
                        <img src={removeIconSrc} alt="Remove icon" className="project-details__close-icon" onClick={() => removeEmployee(projectEmployee.id)}/>
                    </div>
                )) : <Typography variant="alert-text">Attention! The company doesn't have any employees within this project!</Typography>}
            </div>
        </div>
    );
};

export default ProjectDetailsPage;