import css from './Information.module.css';
import Button from '../Button/Button';

export default function Information () {
    return (
        <section className="section">
            <div className="container">
                <div className={css.container}>
                    <div className={css.containerText}>
                        <h4 className={css.title}>Anton Klimov - Professional Pianist</h4>
                        <div className={css.text}>
                        I have been making music for 22 years.
                        During this time I managed to:
                            <ul className={css.list}>
                                <li className={css.item}>Perform 10+ solo musical concerts</li>
                                <li className={css.item}>Participate in 150+ events</li>
                                <li className={css.item}>Join an orchestra at 30+ festivals</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css.containerButton}>
                        <h4 className={css.title}>Мusic with soul</h4>
                        <div className={css.text}>
                        You can invite me to any city in Europe. 
                        I am based in Vienna, but 
                        I am ready to come to any place to brighten your event 
                        with pleasant music and make it memorable.
                        </div>
                        <Button>Contact me</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}