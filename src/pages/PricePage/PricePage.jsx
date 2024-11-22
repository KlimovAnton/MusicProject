import css from './PricePage.module.css';

import Information from "../../components/Information/Information";
import Suggestion from "../../components/Suggestion/Suggestion";
import Price from '../../components/Price/Price';
import Review from "../../components/Review/Review";

import { useMedia } from 'react-use';

export default function PricePage () {

    const isDesktop = useMedia("(min-width: 1280px)");

    return (
        <>
        <Price />
        <Information />
        {/* <Review /> */}
        {/* {isDesktop && <Suggestion />} */}
        </>
    )
}