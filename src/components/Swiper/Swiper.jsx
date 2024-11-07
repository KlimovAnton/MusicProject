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
        slidesPerView={5}
        slidesPerGroup={1}
        speed={400}
        touchAngle={30}
        preventClicks={true}
        navigation={true}
        resistanceRatio={0.1}
        breakpoints={{
          768: { slidesPerView: 4.25, slidesPerGroup: 4 },
          980: { slidesPerView: 5.25, slidesPerGroup: 5 },
          1280: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 20, speed: 900 },
        }}>
        <SwiperSlide><img src={img1} alt="photo-concerts" width="250px" height="300px"/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="photo-concerts" width="250px" height="300px"/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="photo-concerts" width="250px" height="300px"/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="photo-concerts" width="250px" height="300px"/></SwiperSlide>
        <SwiperSlide><img src={img5} alt="photo-concerts" width="250px" height="300px"/></SwiperSlide>
        <SwiperSlide><img src={img6} alt="photo-concerts" width="250px" height="300px"/></SwiperSlide>
        <SwiperSlide><img src={img7} alt="photo-concerts" width="250px" height="300px"/></SwiperSlide>
        <SwiperSlide><img src={img8} alt="photo-concerts" width="250px" height="300px"/></SwiperSlide>
        </Swiper>
      </div>
  );
};