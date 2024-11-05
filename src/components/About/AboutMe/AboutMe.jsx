import css from './AboutMe.module.css';
import Button from '../../Button/Button';

export default function AboutMe () {
    return (
        <div className={css.container}>
            <div className={css.containerText}>
                <h3 className={css.title}>Professional musician at your event
                </h3>
                <p className={css.text}>Musical performance anywhere. 
                    Wedding ceremony, event, birthday and you name it. 
                    <br/>Book a professional musician to fill your event
                    with a cozy and unforgettable atmosphere.
                </p>
            </div>
            <div className={css.containerButton}>
              <Button>+4367762014408</Button>
              <p className={css.text}>WhatsApp and Telegram <br/> are available on this number.</p>
            </div>
        </div>
    )
}