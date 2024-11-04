import Navigation from "../Navigation/Navigation";
import Icons from "../Icons/Icons";
import Logo from "../Logo/Logo";
import css from "./AppBar.module.css";

export default function AppBar () {
    return (
        <header className={css.header}>
            <div className={css.container}>
                <Logo />
                <Navigation />
                <Icons />
            </div>
        </header>
    )
}