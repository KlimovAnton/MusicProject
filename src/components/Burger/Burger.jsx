import css from './Burger.module.css';

import { LuListMusic } from "react-icons/lu";
import { IconContext } from "react-icons";


export default function Burger ({ openModal }) {

    return (
            <IconContext.Provider value={{ size: '40px' }}>
                <button className={css.burgerBtn} onClick={openModal}>
                    <LuListMusic className={css.burgerIcon} />
                </button>
            </IconContext.Provider>
    )
}