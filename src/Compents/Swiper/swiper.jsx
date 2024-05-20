import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Section1A from "../../Compents/AboutUsCompents/SwipCard";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Section1A />
                </SwiperSlide>
                <SwiperSlide>
                    <Section1A />
                </SwiperSlide>
                <SwiperSlide>
                    <Section1A />
                </SwiperSlide>
                <SwiperSlide>
                    <Section1A />
                </SwiperSlide>
                <SwiperSlide>
                    <Section1A />
                </SwiperSlide>
                <SwiperSlide>
                    <Section1A />
                </SwiperSlide>
                <SwiperSlide>
                    <Section1A />
                </SwiperSlide>
                <SwiperSlide>
                    <Section1A />
                </SwiperSlide>
                <SwiperSlide>
                    <Section1A />
                </SwiperSlide>
                <SwiperSlide>
                    <Section1A />
                </SwiperSlide>
                <SwiperSlide>
                    <Section1A />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
