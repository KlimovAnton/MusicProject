import Background from "../../components/Background/Background";
import About from "../../components/About/About";
import Review from "../../components/Review/Review";
import Information from "../../components/Information/Information";
import Suggestion from "../../components/Suggestion/Suggestion";
import css from './Home.module.css';

export default function Home () {
    return (
    <>
        <Background />
        <About />
        <Review />
        <Information />
        <Suggestion />
    </>
    )
}