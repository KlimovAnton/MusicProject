import Background from "../../components/Background/Background";
import About from "../../components/About/About";
import Review from "../../components/Review/Review";
import Information from "../../components/Information/Information";
import Suggestion from "../../components/Suggestion/Suggestion";
import BackgroundTablet from "../../components/BackgroundTablet/BackgroundTablet";
import PriceMobile from "../../components/PriceMobile/PriceMobile";

import css from './HomePage.module.css';

import { useMedia } from "react-use";

export default function HomePage () {

    const isMobile = useMedia("(max-width: 767px)")
    const isNonMobile = useMedia("(min-width: 767px)")
    const isTablet = useMedia("(max-width: 1279px)");
    const isDesktop = useMedia("(min-width: 1280px)");

    return (
    <>
        {isTablet && <BackgroundTablet />}
        {isDesktop && <Background />}
        <About />
        {isMobile && <PriceMobile />}
        {isTablet && <Information />}
        {isDesktop && <Information />}
        <Review />
        {/* {isDesktop && <Suggestion />} */}
    </>
    )
}