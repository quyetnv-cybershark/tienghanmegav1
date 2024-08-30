import TeacherItem from '@/components/TeacherItem';
import { Flex } from 'antd';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Teachers = () => {
  const listTeachers = [
    {
      teacherName: 'Om Hong Sik',
      teacherIntro: 'Giáo Viên Hàn Quốc',
      teacherImg: '/teachers/GIÁO VIÊN OM HONG SIK.png',
      certificate: 'Chứng chỉ năng lực tiếng Việt C1',
      descs: [
        'Cử nhân chuyên ngành tiếng Việt ĐH KHXH và Nhân Văn TPHCM',
        '3 năm kinh nghiệm giảng dạy tiếng Việt cho người Hàn',
        '4 năm kinh nghiệm giảng dạy tiếng Hàn tại Việt Nam',
      ],
    },
    {
      teacherName: 'Đỗ Thu Huyền',
      teacherIntro: 'Giáo viên',
      teacherImg: '/teachers/GIÁO VIÊN THU HUYỀN.png',
      certificate: 'Chứng chỉ TOPIK 6',
      descs: [
        '5 năm kinh nghiệm giảng dạy & luyện thi tiếng Hàn',
        '4 năm kinh nghiệm giảng dạy tiếng Việt cho người Hàn',
        'Cựu giáo viên tiếng Hàn tại trường THCS Long Biên',
        'Cựu giáo viên tiếng Hàn tại trường THCS Việt Hưng',
      ],
    },
    {
      teacherName: 'Park YoungJin',
      teacherIntro: 'Giáo viên Hàn Quốc',
      teacherImg: '/teachers/GIÁO VIÊN Park YoungJin.png',
      certificate: 'Chứng chỉ giao tiếp tiếng Việt C1',
      descs: [
        '3 năm kinh nghiệm đào tạo giao tiếp Hàn Ngữ tại Việt Nam',
        'Cử nhân chuyên ngành Tiếng Việt ĐHQG Hà Nội',
        'Cử nhân đại học Sungkyunkwan',
      ],
    },
  ];
  return (
    <Flex vertical className='home-teachers'>
      <div className='title uppercase text-2xl font-semibold text-red-900 text-center w-full mb-6'>
        Đội ngũ giảng viên
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={false}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: true,
        // }}
        // speed={1000}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        initialSlide={1}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        {listTeachers.map((teacher) => (
          <SwiperSlide key={teacher.teacherImg} className='rounded-lg'>
            <TeacherItem {...teacher} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default Teachers;
