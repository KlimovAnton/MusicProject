import css from './PriceItem.module.css';
import Button from '../../Button/Button';
import img from '../../../assets/swiper/BEBDE289-6610-404F-8AEC-C400CCCACE7B.jpg';

export default function PriceItem () {
    return (
        <div className={css.wrapperProgram}>
            <div className={css.containerProgram}>
                <h3 className={css.titleProgram}>Express - 100 Euro</h3>
                <p className={css.textProgram}>An hour long program for your celebration format.</p>
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