import css from './AboutSummary.module.css';
import Button from '../Button/Button';
import img from '../../assets/wine-photo.jpg';

export default function AboutSummary () {
    return (
        <section className="section">
            <div className="container">
                <h2 className={css.title}>About me</h2>
                <div className={css.container}>
                    <div>
                        <h3>Anton Klimov</h3>
                        <p>Hello. I'm Professional Pianist from south of Ukraine. 
                            Since 2012, I have worked on the Black Sea coast, 
                            in a resort town with beautiful views of the sea and mountains, 
                            as well as luxury hotels awarded three, four and even five stars,
                            that attracted many people to have their events there.             
                            I know how to make an atmosphere of coziness and comfort at your event.
                            I have participated in wedding ceremonies, festivals, wine gallery openings, birthdays and many other events.
                            Over 12 years I have gained a lot of experience in events.
                            I know that any event, be it a big wedding or a modest, cozy birthday, is an important event in the client's life.
                            And I perceive this event as if it were my personal event. I take my task responsibly and carefully.
                        </p>
                    </div>
                    <div>
                        <h4>Musical Equipment</h4>
                        <p>I own a portable piano and a small but high-quality sound amplifier, 
                            which allows me to be mobile. If you need musical accompaniment in a place where there is no electricity, 
                            this is not a problem for me. My equipment can cover a small open space for about 100 guests.
                            Is your event taking place indoors and with a large number of guests? No problem, 
                            I can rent more powerful sound amplifiers that can cover 500 square meters.
                        </p>
                    </div>
                    <div className={css.button}>
                    <p>
                    Are you interested? Write to me to discuss the details.
                    <Button>Contact me</Button>
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}