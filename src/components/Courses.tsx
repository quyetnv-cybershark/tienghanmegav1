import CourseItem from '@/components/CourseItem';
import { Carousel, Flex } from 'antd';

const Courses = () => {
  return (
    <div className='bg-white p-10'>
      <Flex vertical justify='center' align='center' gap={16}>
        <div className='title uppercase text-4xl font-semibold text-red-900 text-center w-full'>khóa học tiếng hàn</div>
        <Flex gap={12}>
          <div className='py-1 px-3 cursor-pointer rounded-xl border-solid border-2 border-blue-400 text-blue-900 font-medium'>
            Khóa học Offline
          </div>
          <div className='py-1 px-3 cursor-pointer rounded-xl border-solid border-2 border-blue-400 bg-blue-400 text-white font-medium'>
            Khóa học Online
          </div>
        </Flex>
      </Flex>
      <Carousel autoplay autoplaySpeed={2000}>
        <div className='w-full !flex justify-center'>
          <div className='w-5/6 mt-8 flex gap-10'>
            <CourseItem />
            <CourseItem isActive={true} />
            <CourseItem />
          </div>
        </div>
        <div className='w-full !flex justify-center'>
          <div className='w-5/6 mt-8 flex gap-10'>
            <CourseItem />
            <CourseItem isActive={true} />
            <CourseItem />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Courses;
