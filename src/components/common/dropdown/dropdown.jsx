import "./dropdown.scss";

const Dropdown = ({name, options, onChange, defaultValue}) => {
    return(
        <select name={name} className="dropdown" onChange={onChange} value={defaultValue}>
            {options.map(e => (<option key={e.id} value={e.id}>{`${e.firstName} ${e.lastName}`}</option>))}
        </select>
    )
};

export default Dropdown;