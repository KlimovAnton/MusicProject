import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import img1 from '../../assets/swiper/beach-photo-6.jpg';
import img2 from '../../assets/swiper/BEBDE289-6610-404F-8AEC-C400CCCACE7B.jpg';
import img3 from '../../assets/swiper/photo_2024-11-06_09-00-58.jpg';
import img4 from '../../assets/swiper/photo_2024-11-06_09-00-59.jpg';
import img5 from '../../assets/swiper/photo_2024-11-06_09-00-60.jpg';
import img6 from '../../assets/swiper/photo_2024-11-06_09-00-61.jpg';
import img7 from '../../assets/swiper/wine-photo-2.jpg';
import img8 from '../../assets/swiper/wine-photo.jpg';

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
        pagination={{clickable: true}}
        style={{
          "--swiper-navigation-color": "#fec90c"
      }}
        resistanceRatio={0.1}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2.5, slidesPerGroup: 1 },
          1280: { slidesPerView: 5, slidesPerGroup: 1, spaceBetween: 20, speed: 900 },
        }}>
          <SwiperSlide><img src={img2} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide><img src={img4} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide><img src={img3} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide><img src={img8} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide><img src={img5} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide><img src={img6} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide><img src={img7} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
          <SwiperSlide><img src={img1} alt="photo-concerts" width="300px" height="300px"/></SwiperSlide>
        </Swiper>
      </div>
  );
};