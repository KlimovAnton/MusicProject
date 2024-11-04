import css from "./Hero.module.css";
import Button from "../Button/Button";

export default function Hero () {
    return (
        <section>
            <div className={css.overlay}></div> 
            <div className={css.container}>
                <h4 className={css.mainTitle}>Wedding of your dreams</h4>
                <p className={css.subTitle}>
                Professional musician for your event in Austria, Slovakia, Czech Republic or other countries
                </p>
                <Button>Contact me</Button>
            </div>
        </section>
    )
}