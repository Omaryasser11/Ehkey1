import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const MySwiper = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            {/* Add more slides as needed */}
        </Swiper>
    );
};

export default MySwiper;
