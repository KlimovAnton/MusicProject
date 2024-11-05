import css from './About.module.css';
import img1 from '../../assets/wine-photo-2.jpg';
import img2 from '../../assets/beach-photo-own.jpg';
import { Link } from 'react-router-dom';

export default function About () {
    return (
        <section className={css.hero}>
            <div className={css.container}>
                <ul className={css.list}>
                    <li className={css.item}>
                        <Link to="/about" className={css.link}>
                            <div className={css.overlay}></div>
                            <img className={css.img} src={img1} alt="photo-concerts"/>
                            <p className={css.text}>My concerts</p>
                        </Link>
                    </li>
                    <li className={css.item}>
                        <Link to="/about">
                            <div className={css.overlay}></div>
                            <img className={css.img} src={img2} alt="photo-own-music"/>
                            <p className={css.text}>My own music</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}