import ReactPlayer from 'react-player';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Flex, Image } from 'antd';
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
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: true,
        // }}
        autoplay={false}
        modules={[Autoplay, Pagination]}
        className='banner-swiper'
      >
        <SwiperSlide>
          <Flex vertical align='center' justify='center' className='h-[60vh] relative w-full'>
            <ReactPlayer
              url='/introMega.mp4'
              controls={false}
              width='100%'
              height='100%'
              playing={true}
              muted={true}
              loop={true}
            />
            <div className='bg-[#ffffff99] absolute top-0 right-0 left-0 bottom-0 z-[1]'></div>
            <Flex vertical align='center' justify='center' className='absolute top-0 right-0 left-0 bottom-0 z-10'>
              <div className='absolute top-4 left-4'>
                <Image alt='' src='/logoRed.png' height={64} width='auto' preview={false} />
              </div>
              <div className='text-8xl font-serif  text-primaryColor'>MEGA KOREAN MASTERY</div>
              <div className='text-base text-white font-medium cursor-pointer px-12 py-4 rounded-full bg-primaryColor mt-8'>
                CHINH PHỤC NGAY
              </div>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Image alt='Banner Image' src='/mega-banner.jpg' preview={false} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
