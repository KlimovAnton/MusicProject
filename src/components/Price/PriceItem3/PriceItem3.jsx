import css from './PriceItem3.module.css';
import Button from '../../Button/Button';
import img from '../../../assets/swiper/wine-photo-2.jpg';

export default function PriceItem3 () {
    return (
        <div className={css.wrapperProgram}>
            <div className={css.containerProgram}>
                <h3 className={css.titleProgram}>Premium - from 400 Euro</h3>
                <p className={css.textProgram}>Suitable for any format - from a small and cozy wedding dinner, a noisy party or a large-scale celebration</p>
                <ul className={css.listProgram}>
                    <li className={css.itemProgram}>1 lounge block – 60 minutes</li>
                    <li className={css.itemProgram}>Consulting on audio equipment</li>
                    <li className={css.itemProgram}>Total time on site does not exceed two hours.</li>
                </ul>
                <Button>Contact me</Button>
            </div>
            <div className={css.img}>
                <img className={css.picture} src={img} alt="photo-concerts"/>
            </div>
        </div>
    )
}