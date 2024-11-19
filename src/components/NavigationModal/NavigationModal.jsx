import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "./NavigationModal.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function NavigationModal({ onClose }) {
  return (
    <div className={css.navListContainer}>
        <NavLink to="/" className={getNavLinkClass} onClick={() => onClose()} >
            Home
        </NavLink>
        <NavLink to="/about" className={getNavLinkClass} onClick={() => onClose()} >
            About
        </NavLink>
        <NavLink to="/price" className={getNavLinkClass} onClick={() => onClose()} >
            Prices
        </NavLink>
        <NavLink to="/video" className={getNavLinkClass} onClick={() => onClose()} >
            Video
        </NavLink>
        <NavLink to="/contacts" className={getNavLinkClass} onClick={() => onClose()} >
            Contact
        </NavLink>
    </div>
  );
}