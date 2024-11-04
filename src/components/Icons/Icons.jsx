import css from "./Icons.module.css";
import { IconContext } from "react-icons";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane, FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import './Icons.css';

export default function Icons () {
    return (
      <div className={css.container}>
        <IconContext.Provider value={{ size: '25px', className: 'contactIcon' }}>
        <a href="https://www.youtube.com/channel/UCzy0p4WsUh8Zd12oliF6M3w" target="_blank" className={css.contactIcon}>
          <IoLogoYoutube />
        </a>
        <a href="https://www.instagram.com/klimov.music/" target="_blank" className={css.contactIcon}>
          <IoLogoInstagram />
        </a>
        <a href="https://t.me/AntonRumataa" target="_blank" className={css.contactIcon}>
          <FaTelegramPlane />
        </a>
        <a href="#" target="_blank" className={css.contactIcon}>
          <FaSquareWhatsapp />
        </a>
        <a href="https://www.facebook.com/share/Qmrrc2ti47EZrHvU/?mibextid=LQQJ4d" target="_blank" className={css.contactIcon}>
          <FaFacebookSquare />
        </a>
        </IconContext.Provider>
      </div>
    )
}