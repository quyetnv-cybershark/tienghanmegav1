import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

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
          <Image
            alt='Banner Image 1'
            src='/mega-banner1.svg'
            priority
            layout='responsive'
            width={100} // tỷ lệ khung hình, ví dụ 100:56
            height={56} // ví dụ
            objectFit='cover' // Điều chỉnh cách hình ảnh được cắt
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='Banner Image'
            src='/mega-banner.svg'
            priority
            layout='responsive'
            width={100} // tỷ lệ khung hình, ví dụ 100:56
            height={56} // ví dụ
            objectFit='cover' // Điều chỉnh cách hình ảnh được cắt
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
