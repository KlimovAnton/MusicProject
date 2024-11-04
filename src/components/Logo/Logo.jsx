import { GiMusicSpell } from "react-icons/gi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import css from "./Logo.module.css";

export default function Logo () {
    return (
        <Link to="/" className={css.logo}>
            <IconContext.Provider value={{ size: '40px', className: 'contactIcon' }}>
            <GiMusicSpell />
            </IconContext.Provider>
        </Link>
    )
}