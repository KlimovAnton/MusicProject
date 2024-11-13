import css from './ContactPage.module.css';

import Review from "../../components/Review/Review";
import Information from "../../components/Information/Information";
import Suggestion from "../../components/Suggestion/Suggestion";
import Contact from "../../components/Contact/Contact";

export default function ContactPage () {
    return (
        <>
        <Contact />
        <Review />
        <Information />
        <Suggestion />
        </>
    )
}