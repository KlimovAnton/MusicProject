import css from './Information.module.css';
import Button from '../Button/Button';

export default function Information () {
    return (
        <section className="section">
            <div className="container">
                <div className={css.container}>
                    <div className={css.containerText}>
                        <h4>I'm Anton Klimov - pianist</h4>
                        <p>
                        I've been making music for 22 years.
                        During this time I managed to:
                            <ul>
                                <li>Performed 10+ solo musical concerts</li>
                                <li>Participated in 150+ events</li>
                                <li>Joined an orchestra at 30+ festivals</li>
                            </ul>
                        </p>
                    </div>
                    <div className={css.containerButton}>
                        <p>
                        Мusic with soul</p>
                        <p className={css.width}>Вы можете пригласить нас в любом городе по Крыму, Симферополь, Севастополь, Ялта, Алушта, Евпатория, Судак, Керчь, Черноморское, Феодосия, ;мы выезжаем по Крыму, на свадьбу, концерт, праздник, эвент мероприятие с хорошим звучанием и зрелищным шоу.

                        </p>
                        <Button>Contact me</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}