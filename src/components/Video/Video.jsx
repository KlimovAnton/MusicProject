import css from './Video.module.css';
import Player from '../Player/Player';

export default function Video () {
    return (
        <section className='section'>
            <div className='container'>
                <h2 className={css.title}>Video</h2>
                <Player />
            </div>
        </section>
    )
}