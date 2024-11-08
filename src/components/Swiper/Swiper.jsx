import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import img1 from '../../assets/beach-photo-2.jpg';
import img2 from '../../assets/beach-photo-3.jpg';
import img3 from '../../assets/beach-photo-4.jpg';
import img4 from '../../assets/beach-photo-5.jpg';
import img5 from '../../assets/beach-photo-6.jpg';
import img6 from '../../assets/photo_2024-11-05_08-20-22 (7).jpg';
import img7 from '../../assets/wine-photo.jpg';
import img8 from '../../assets/royal-photo.jpg';

import css from './Swiper.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Swiperr () {
  return (
    <div className={css.container}>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={2}
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
          768: { slidesPerView: 4.25, slidesPerGroup: 1 },
          980: { slidesPerView: 5.25, slidesPerGroup: 1 },
          1280: { slidesPerView: 5, slidesPerGroup: 1, spaceBetween: 20, speed: 900 },
        }}>
          <SwiperSlide key="1"><img src={img1} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide key="2"><img src={img2} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide key="3"><img src={img3} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide key="4"><img src={img4} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide key="5"><img src={img5} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide key="6"><img src={img6} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide key="7"><img src={img7} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide key="8"><img src={img8} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
        </Swiper>
      </div>
  );
};