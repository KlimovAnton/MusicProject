import css from './Footer.module.css';

import Logo from '../Logo/Logo';

export default function Footer () {

    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <div className={css.containerText}>
                    <Logo />
                    <p>Anton Klimov. I've been working since 2012.</p>
                </div>
            </div>
        </footer>
    )
}