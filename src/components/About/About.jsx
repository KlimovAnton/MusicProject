import css from './About.module.css';
import AboutLink from './AboutLink/AboutLink';
import AboutMe from './AboutMe/AboutMe';

import { useMedia } from "react-use";

export default function About () {

    const isTablet = useMedia("(min-width: 768px)");

    return (
        <section className="section">
            <div className="container">
                <AboutMe />
                {isTablet && <AboutLink />}
            </div>
        </section>
    )
}