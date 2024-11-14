import css from './PriceItem3.module.css';
import Button from '../../Button/Button';
import img from '../../../assets/swiper/wine-photo-2.jpg';

export default function PriceItem3 () {
    return (
        <div className={css.wrapperProgram}>
            <div className={css.containerProgram}>
                <h3 className={css.titleProgram}>Wedding day - from 400 Euro</h3>
                <p className={css.textProgram}>For a once-in-a-lifetime important event, 
                    I am completely at your disposal. 
                    That's why, If there are any delays or unforeseen situations, 
                    I will certainly be flexible and understanding. </p>
                <ul className={css.listProgram}>
                    <li className={css.itemProgram}>Program duration - 2 hour 15 minutes</li>
                    <li className={css.itemProgram}>3 music blocks</li>
                    <li className={css.itemProgram}>Consulting on audio equipment</li>
                    <li className={css.itemProgram}>Consulting on performance venue</li>
                    <li className={css.itemProgram}>Location: Austria, Vienna</li>
                    <li className={css.itemProgram}>Location: Anywhere (charged separately)</li>
                    <li className={css.itemProgram}>Total time on site does not exceed <b>eight hours</b>.</li>
                </ul>
                <Button>Contact me</Button>
            </div>
            <div className={css.img}>
                <img className={css.picture} src={img} alt="photo-concerts"/>
            </div>
        </div>
    )
}