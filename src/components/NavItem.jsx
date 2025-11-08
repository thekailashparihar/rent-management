import { NavLink } from "react-router-dom";

const NavItem = ({ path, label }) => {
    return (
        <li>
            <NavLink to={path} activeClassName="active">
                {label}
            </NavLink>
        </li>
    );
};

export default NavItem;
