import css from './GalleryPage.module.css';

import Review from "../../components/Review/Review";
import Information from "../../components/Information/Information";
import Suggestion from "../../components/Suggestion/Suggestion";

export default function GalleryPage () {
    return (
        <>
        <Review />
        <Information />
        <Suggestion />
        </>
    )
}