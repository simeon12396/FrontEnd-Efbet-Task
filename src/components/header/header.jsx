import "./header.scss";
import { NavLink } from "react-router-dom";
import Typography from "../common/typography/typography";

const Header = () => {
  const listItems = [
    { link: "home", to: "/" },
    { link: "companies", to: "companies" },
  ];

  return (
    <header className="header box-shadow">
      <nav className="header__nav">
        {listItems.map(li => (
          <NavLink to={li.to} className="header__li" key={li.link}>
            <Typography variant="primary-text">{li.link.toUpperCase()}</Typography>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
