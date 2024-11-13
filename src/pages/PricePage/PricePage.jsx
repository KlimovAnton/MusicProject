import css from './PricePage.module.css';

import Information from "../../components/Information/Information";
import Suggestion from "../../components/Suggestion/Suggestion";
import Price from '../../components/Price/Price';

export default function PricePage () {
    return (
        <>
        <Price />
        <Information />
        <Suggestion />
        </>
    )
}