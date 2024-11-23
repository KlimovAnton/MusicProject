import css from './BackgroundTablet.module.css';
import Button from '../Button/Button';

export default function BackgroundTablet () {
    return (
            <div className={css.background}>
                <div className={css.overlay}>
                    <div className={css.container}>
                        <h4 className={css.mainTitle}>Event of your dreams</h4>
                        <p className={css.subTitle}>
                        Professional musician for your event in Austria, Slovakia, Czech Republic or other countries
                        </p>
                        <Button></Button>
                    </div>
                </div> 
            </div>
    )
}