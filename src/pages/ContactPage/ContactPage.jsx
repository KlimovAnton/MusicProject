import css from './ContactPage.module.css';

import Review from "../../components/Review/Review";
import Information from "../../components/Information/Information";
import Suggestion from "../../components/Suggestion/Suggestion";

export default function ContactPage () {
    return (
        <>
        <Review />
        <Information />
        <Suggestion />
        </>
    )
}