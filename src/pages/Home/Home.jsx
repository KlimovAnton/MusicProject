import Background from "../../components/Background/Background";
import css from './Home.module.css';
import { NavLink } from "react-router-dom";

export default function Home () {
    return (
    <>
        <Background />
        <section className={css.hero}>
            <div className={css.container}>
                <h1 className={css.mainTitle}>Wedding of your dreams</h1>
                <p className={css.subTitle}>
                You can find everything you want in our catalog
                </p>
                <NavLink to="/contacts" className={css.catalogLink}>
                Contact me
                </NavLink>
            </div>
        </section>
    </>
    )
}