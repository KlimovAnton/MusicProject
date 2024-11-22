import css from './VideoPage.module.css';

import Review from "../../components/Review/Review";
import Information from "../../components/Information/Information";
import Suggestion from "../../components/Suggestion/Suggestion";
import Video from '../../components/Video/Video';

import { useMedia } from 'react-use';

export default function VideoPage () {

    const isDesktop = useMedia("(min-width: 1280px)");

    return (
        <>
        <Video />
        <Information />
        {/* <Review /> */}
        {/* {isDesktop && <Suggestion />} */}
        </>
    )
}