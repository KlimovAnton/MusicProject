import css from './AboutPage.module.css';

import Review from "../../components/Review/Review";
import Information from "../../components/Information/Information";
import Suggestion from "../../components/Suggestion/Suggestion";
import AboutSummary from '../../components/AboutSummary/AboutSummary';

import { useMedia } from 'react-use';

export default function AboutPage () {

    const isNonMobile = useMedia("(min-width: 767px)");
    const isDesktop = useMedia("(min-width: 1280px)");

    return (
        <>
        <AboutSummary />
        <Review />
        {isNonMobile && <Information />}
        {/* {isDesktop && <Suggestion />} */}
        </>
    )
}