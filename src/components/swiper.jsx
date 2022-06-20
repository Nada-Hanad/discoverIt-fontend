import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';
import MediaCard from './card';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

export default function SwiperSection() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get('http://localhost:3000/locations')
      .then((res) => {
        console.log(res.data);
        setLocations(res.data);
      })
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, []);

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
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <SwiperSlide>
            <h1>Oopsie</h1>
          </SwiperSlide>
        ) : (
          <>
            {locations.map((e) => (
              <SwiperSlide>
                <MediaCard
                  id={e._id}
                  name={e.name}
                  description={e.description}
                  first={e.mediaContent[0]}
                  images={e.mediaContent}
                />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </>
  );
}
