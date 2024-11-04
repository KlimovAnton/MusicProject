import videoBg from '../../assets/videoBg.mp4';
import css from './Background.module.css';
import Hero from '../Hero/Hero';
export default function Background () {
    return (
        <div className={css.background}>
            <video src={videoBg} autoPlay loop muted className={css.overlay}/>
            <div className={css.overlay}></div>
            <Hero />
        </div>
    )
}