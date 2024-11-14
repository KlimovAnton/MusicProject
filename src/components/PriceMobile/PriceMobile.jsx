import css from './PriceMobile.module.css';

import { Link } from 'react-router-dom';
import img2 from '../../assets/beach-photo-own.jpg';

export default function PriceMobile () {
    return (
        <Link className={css.link} to="/price">
                    <div className={css.overlay}></div>
                    <img className={css.img} src={img2} alt="photo-own-music"/>
                    <p className={css.text}>Prices</p>
        </Link>
    )
}