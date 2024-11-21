import css from './Button.module.css';
import clsx from 'clsx';
import { NavLink } from "react-router-dom";

export default function Button ({ openModal }) {

  return (
    <button
      onClick={openModal}
      type='button'
      className={css.btn}>
        <NavLink to="/contacts" className={css.link}>
          Contact me
        </NavLink>
    </button>
  )
}