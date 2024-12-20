import css from './PriceItem2.module.css';
import Button from '../../Button/Button';
import img from '../../../assets/swiper/BEBDE289-6610-404F-8AEC-C400CCCACE7B.jpg';
import { useMedia } from 'react-use';

export default function PriceItem2 () {

    const isDesktop = useMedia("(min-width: 1280px)");

    return (
        <div className={css.wrapperProgram}>
            <div className={css.containerProgram}>
                <h3 className={css.titleProgram}>Standard - from 300 Euro</h3>
                <p className={css.textProgram}>
                Suitable for any format - a small and cozy wedding dinner, gallery exhibition, corporate event, cafe opening, birthday, etc.
                </p>
                <ul className={css.listProgram}>
                    <li className={css.itemProgram}>Program duration - 1 hour 30 minutes</li>
                    <li className={css.itemProgram}>3 music blocks or 2 music blocks – 90 minutes</li>
                    <li className={css.itemProgram}>Consulting on audio equipment</li>
                    <li className={css.itemProgram}>Consulting on performance venue</li>
                    <li className={css.itemProgram}>Location: Austria, Vienna</li>
                    <li className={css.itemProgram}>Location: within 250 km from Vienna <br/> (charged separately)</li>
                    <li className={css.itemProgram}>Total time on site does not exceed <b>three hours</b>.</li>
                </ul>
                <Button></Button>
            </div>
            {isDesktop && <div className={css.img}>
                <img className={css.picture} src={img} alt="photo-concerts"/>
            </div>}
        </div>
    )
}