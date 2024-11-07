import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import css from './ReviewList.module.css'
import img1 from '../../../assets/beach-photo-2.jpg';
import img2 from '../../../assets/beach-photo-3.jpg';
import img3 from '../../../assets/beach-photo-4.jpg';
import img4 from '../../../assets/beach-photo-5.jpg';
import img5 from '../../../assets/beach-photo-6.jpg';
import img6 from '../../../assets/photo_2024-11-05_08-20-22 (7).jpg';
import img7 from '../../../assets/wine-photo.jpg';
import img8 from '../../../assets/royal-photo.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ReviewList () {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
            <SwiperSlide>
                    <img className={css.img} src={img1} alt="photo-concerts"/>
            </SwiperSlide>
            <SwiperSlide>
                    <img className={css.img} src={img2} alt="photo-concerts"/>
            </SwiperSlide>
            <SwiperSlide>
                    <img className={css.img} src={img3} alt="photo-concerts"/>
            </SwiperSlide>
            <SwiperSlide>
                    <img className={css.img} src={img4} alt="photo-concerts"/>
            </SwiperSlide>
            <SwiperSlide>
                    <img className={css.img} src={img5} alt="photo-concerts"/>
            </SwiperSlide>
            <SwiperSlide>
                    <img className={css.img} src={img6} alt="photo-concerts"/>
            </SwiperSlide>
            <SwiperSlide>
                    <img className={css.img} src={img7} alt="photo-concerts"/>
            </SwiperSlide>
            <SwiperSlide>
                    <img className={css.img} src={img8} alt="photo-concerts"/>
            </SwiperSlide>
        </Swiper>
    )
}