import videoBg from '../../assets/videoBg.mp4';
import css from './Background.module.css'

export default function Background () {
    return (
        <div className={css.background}>
            <video src={videoBg} autoPlay loop muted/>
        </div>
    )
}