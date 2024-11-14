import PriceItem from './PriceItem/PriceItem';
import PriceItem2 from './PriceItem2/PriceItem2';
import PriceItem3 from './PriceItem3/PriceItem3';
import PriceText from './PriceText/PriceText';
import css from './Price.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Price () {

    return (
        <section className='section'>
            <div className='container'>
                <div className={css.wrapper}>
                    <PriceText />
                    <div className={css.container}>
                        <Swiper
                        initialSlide={1}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        speed={400}
                        touchAngle={30}
                        preventClicks={true}
                        navigation={true}
                        style={{
                        "--swiper-navigation-color": "#fec90c"
                    }}
                        resistanceRatio={0.1}
                        breakpoints={{
                        768: { slidesPerView: 1, slidesPerGroup: 1 },
                        980: { slidesPerView: 1, slidesPerGroup: 1 },
                        1280: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20, speed: 900 },
                        }}>
                            <SwiperSlide><PriceItem /></SwiperSlide>
                            <SwiperSlide><PriceItem2 /></SwiperSlide>
                            <SwiperSlide><PriceItem3 /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}