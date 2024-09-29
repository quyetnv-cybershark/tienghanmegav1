import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Image } from 'antd';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Banner() {
  return (
    <div className='home-banner'>
      <Swiper
        autoHeight={true}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination]}
        className='banner-swiper'
      >
        <SwiperSlide>
          <Image alt='Banner Image 1' src='/mega-banner1.jpg' preview={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt='Banner Image' src='/mega-banner.svg' preview={false} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
