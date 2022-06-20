import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';
import MediaCard from './card';
import { CircularProgress } from '@mui/material';

export default function SwiperSection() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <MediaCard image='https://i.pinimg.com/736x/7a/e0/e5/7ae0e56c1effe88401c4fed02554ec1c.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
