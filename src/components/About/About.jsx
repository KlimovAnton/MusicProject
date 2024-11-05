import css from './About.module.css';
import AboutLink from './AboutLink/AboutLink';
import AboutMe from './AboutMe/Aboutme';

export default function About () {
    return (
        <section className={css.hero}>
            <div className={css.container}>
                <AboutMe />
                <AboutLink />
            </div>
        </section>
    )
}