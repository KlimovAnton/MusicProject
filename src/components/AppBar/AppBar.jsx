import css from "./AppBar.module.css";

import { useMedia } from "react-use";
import { useState } from 'react';

import Navigation from "../Navigation/Navigation";
import MenuModal from "../MenuModal/MenuModal";
import Icons from "../Icons/Icons";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";

export default function AppBar () {

    const isTablet = useMedia("(max-width: 1279px)");
    const isDesktop = useMedia("(min-width: 1280px)");
    
    const [isOpen, setIsOpen] =useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
            <header className={css.header}>
                <div className={css.container}>
                    <Logo />
                    {isTablet && <Icons />}
                    {isTablet && <Burger openModal={openModal} />}
                    {isDesktop && <Navigation />}
                    {isDesktop && <Icons />}
                    {isOpen && <MenuModal isOpen={setIsOpen} onClose={closeModal} />}
                </div>
            </header>
    )
}