import css from './PriceItem2.module.css';
import Button from '../../Button/Button';
import img from '../../../assets/swiper/beach-photo-6.jpg';

export default function PriceItem2 () {
    return (
        <div className={css.wrapperProgram}>
            <div className={css.containerProgram}>
                <h3 className={css.titleProgram}>Standard - 250 Euro</h3>
                <p className={css.textProgram}>
                Suitable for any format - from a small and cozy wedding dinner, a noisy party or a large-scale celebration.
                </p>
                <ul className={css.listProgram}>
                    <li className={css.itemProgram}>Program duration - 1 hour 30 minutes</li>
                    <li className={css.itemProgram}>Consulting on audio equipment</li>
                    <li className={css.itemProgram}>3 music blocks or 2 music blocks – 90 minutes</li>
                    <li className={css.itemProgram}>Transfer within 100 kilometers</li>
                    <li className={css.itemProgram}>Total time on site does not exceed four hours.</li>
                </ul>
                <Button>Contact me</Button>
            </div>
            <div className={css.img}>
                <img className={css.picture} src={img} alt="photo-concerts"/>
            </div>
        </div>
    )
}