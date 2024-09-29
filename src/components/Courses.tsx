import CourseItem from '@/components/CourseItem';
import HomeTitle from '@/components/HomeTitle';
import { Flex } from 'antd';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const listCourses = [
  {
    title: 'SƠ CẤP 1',
    desc: 'Phù hợp với người mới bắt đầu học tiếng Hàn, giúp nắm vững nền tảng ngữ pháp, từ vựng cơ bản và phát triển kỹ năng giao tiếp cơ bản.',
    img: '/courses/socap1.png',
  },
  {
    title: 'SƠ CẤP 2',
    desc: 'Dành cho người đã có nền tảng tiếng Hàn cơ bản, giúp củng cố ngữ pháp và mở rộng từ vựng.',
    img: '/courses/socap2.png',
  },
  {
    title: 'TRUNG CẤP 3',
    desc: 'Tập trung nâng cao ngữ pháp và kỹ năng nghe nói, tăng cường vốn từ vựng và rèn luyện kỹ năng viết.',
    img: '/courses/trungcap3.png',
  },
  {
    title: 'GIAO TIẾP',
    desc: 'Giúp học viên tự tin giao tiếp ở trình độ cao, tạo nền tảng vững chắc cho các kỳ thi TOPIK.',
    img: '/courses/giaotiep.jpg',
  },
  {
    title: 'TOPIK II CẤP ĐỘ 3,4,5,6',
    desc: 'Giúp học viên làm chủ cấu trúc đề thi và các mẹo làm bài hiệu quả, phát triển toàn diện các kỹ năng đọc, nghe, viết.',
    img: '/courses/topik2.svg',
  },
  {
    title: 'LỚP CHUYÊN SÂU 1-1',
    desc: 'Phù hợp với học viên muốn học theo lộ trình cá nhân riêng biệt, giúp chinh phục mục tiêu đề ra trong thời gian ngắn nhất.',
    img: '/courses/chuyensau11.png',
  },
];
const Courses = () => {
  return (
    <div className='home-courses bg-background'>
      <Flex vertical justify='center' align='center' gap={16}>
        <HomeTitle text='khóa học tiếng hàn' />
      </Flex>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='courses-swiper'
      >
        {listCourses.map((course) => {
          return (
            <SwiperSlide key={course.title} className='bg-white'>
              <CourseItem {...course} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Courses;
