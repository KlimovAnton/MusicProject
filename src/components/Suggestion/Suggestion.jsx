import css from './Suggestion.module.css';
import { Link } from 'react-router-dom';
import img1 from '../../assets/photo_2024-11-05_08-27-50 (4).jpg';
import img2 from '../../assets/photo_2024-11-05_08-27-50 (3).jpg';
import img3 from '../../assets/photo_2024-11-05_08-27-50 (2).jpg';
import img4 from '../../assets/photo_2024-11-05_08-27-16.jpg';

export default function Suggestion () {
    return (
        <section className='section'>
            <div className='container'>
                <div className={css.container}>
                    <div className={css.item}>
                        <img src={img1} alt="photo-concerts" width="350px" height="470px"/>
                        <div className={css.position}>
                            <p className={css.title}>Concerts</p>
                            <p className={css.text}>Music programs</p>
                        </div>
                    </div>
                    <div className={css.item}>
                        <img src={img2} alt="photo-concerts" width="350px" height="470px"/>
                        <div className={css.position}>
                            <p className={css.title}>Musician</p>
                            <p className={css.text}>For wedding ceremony</p>
                        </div>
                    </div>
                    <div className={css.item}>
                        <img src={img3} alt="photo-concerts" width="350px" height="470px"/>
                        <div className={css.position}>
                            <p className={css.title}>Events</p>
                            <p className={css.text}>Lounge music</p>
                        </div>
                    </div>
                    <div className={css.item}>
                        <img src={img4} alt="photo-concerts" width="350px" height="470px"/>
                        <div className={css.position}>
                            <p className={css.title}>Birthdays</p>
                            <p className={css.text}>Romantic life music</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}