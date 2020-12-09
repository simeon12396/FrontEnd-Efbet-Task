import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const listItems = [
    { link: "home", to: "/" },
    { link: "companies", to: "companies" },
    { link: "employees", to: "employees" },
  ];

  return (
    <header className="header box-shadow">
      <nav className="header__nav">
        {listItems.map(li => (
          <NavLink to={li.to} className="header__li h3">
            {li.link.toUpperCase()}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
