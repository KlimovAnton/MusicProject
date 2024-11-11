import css from './AboutPage.module.css';

import Review from "../../components/Review/Review";
import Information from "../../components/Information/Information";
import Suggestion from "../../components/Suggestion/Suggestion";
import AboutSummary from '../../components/AboutSummary/AboutSummary';

export default function AboutPage () {
    return (
        <>
        <AboutSummary />
        <Review />
        <Information />
        <Suggestion />
        </>
    )
}