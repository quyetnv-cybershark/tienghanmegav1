import { Flex, Image } from 'antd';
import React from 'react';

interface CourseItemProps {
  title: string;
  desc: string;
  img: string;
}

const CourseItem = ({ title, desc, img }: CourseItemProps) => {
  return (
    <Flex
      vertical
      gap={12}
      className='course-item border-2 border-solid border-gray-300 h-fit overflow-hidden relative w-full hover:scale-105'
    >
      {/* <div className='absolute top-3 left-1 bg-red-500 text-white font-medium uppercase px-4 py-0.5 z-10 rounded-xl cursor-pointer'>
        khóa học
      </div> */}
      <div className='img-wraper'>
        <Image alt='' src={img} />
      </div>
      <Flex vertical className='p-3'>
        <div className='sub-title uppercase text-lg font-semibold text-gray-900 mb-2'>{title}</div>
        <div className='desc text-gray-500 line-clamp-3 h-[4.5rem]'>{desc}</div>
        <div className='uppercase text-xs mt-3 text-gray-950 cursor-pointer w-fit'>xem thêm</div>
      </Flex>
    </Flex>
  );
};

export default CourseItem;
