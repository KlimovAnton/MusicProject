import css from './PriceItem.module.css';
import Button from '../../Button/Button';
import img from '../../../assets/swiper/BEBDE289-6610-404F-8AEC-C400CCCACE7B.jpg';

import { useMedia } from 'react-use';

export default function PriceItem () {

    const isDesktop = useMedia("(min-width: 1280px)");

    return (
        <div className={css.wrapperProgram}>
            <div className={css.containerProgram}>
                <h3 className={css.titleProgram}>Express - 150 Euro</h3>
                <p className={css.textProgram}>Suitable for events with a musical welcome zone, musical accompaniment of marriage proposals, birthday surprise.</p>
                <ul className={css.listProgram}>
                    <li className={css.itemProgram}>1 lounge block – 45 minutes</li>
                    <li className={css.itemProgram}>Consulting on audio equipment</li>
                    <li className={css.itemProgram}>Consulting on performance venue</li>
                    <li className={css.itemProgram}>Location: Austria, Vienna</li>
                    <li className={css.itemProgram}>Total time on site does not exceed <b>90 minutes</b>.</li>
                </ul>
                <Button></Button>
            </div>
            {isDesktop && <div className={css.img}>
                <img className={css.picture} src={img} alt="photo-concerts"/>
            </div>}
        </div>
    )
}