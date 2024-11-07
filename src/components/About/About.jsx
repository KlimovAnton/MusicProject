import css from './About.module.css';
import AboutLink from './AboutLink/AboutLink';
import AboutMe from './AboutMe/Aboutme';

export default function About () {
    return (
        <section className="section">
            <div className="container">
                <AboutMe />
                <AboutLink />
            </div>
        </section>
    )
}