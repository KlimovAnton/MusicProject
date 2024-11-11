import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClass = ({isActive}) => {
  return clsx(css.link, isActive && css.active)
}

export default function Navigation () {
  return (
    <nav>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getNavLinkClass}>
          About
        </NavLink>
        <NavLink to="/price" className={getNavLinkClass}>
          Prices
        </NavLink>
        <NavLink to="/video" className={getNavLinkClass}>
          Video
        </NavLink>
        <NavLink to="/gallery" className={getNavLinkClass}>
          Gallery
        </NavLink>
        <NavLink to="/contacts" className={getNavLinkClass}>
          Contact
        </NavLink>
    </nav>
  )
}