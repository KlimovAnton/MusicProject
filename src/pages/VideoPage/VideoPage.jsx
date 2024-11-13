import css from './VideoPage.module.css';

import Review from "../../components/Review/Review";
import Information from "../../components/Information/Information";
import Suggestion from "../../components/Suggestion/Suggestion";
import Video from '../../components/Video/Video';

export default function VideoPage () {
    return (
        <>
        <Video />
        <Review />
        <Information />
        <Suggestion />
        </>
    )
}