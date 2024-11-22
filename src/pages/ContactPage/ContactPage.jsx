import css from './ContactPage.module.css';

import Review from "../../components/Review/Review";
import Information from "../../components/Information/Information";
import Suggestion from "../../components/Suggestion/Suggestion";
import Contact from "../../components/Contact/Contact";

import { useMedia } from 'react-use';

export default function ContactPage () {

    const isDesktop = useMedia("(min-width: 1280px)");

    return (
        <>
        <Contact />
        <Review />
        {/* {isDesktop && <Suggestion />} */}
        </>
    )
}