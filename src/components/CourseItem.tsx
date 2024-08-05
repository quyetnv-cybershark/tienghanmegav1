import { Flex, Image } from 'antd';
import React from 'react';

interface CourseItemProps {
  isActive?: boolean;
}

const CourseItem = ({ isActive = false }: CourseItemProps) => {
  return (
    <Flex
      vertical
      gap={12}
      className={`border-2 border-solid border-gray-300 h-fit overflow-hidden relative ${isActive ? 'scale-110 rounded-xl border-blue-600' : 'mt-[-10px] mb-[5%] rounded-md'}`}
    >
      <div className='absolute top-1 left-1 bg-red-500 text-white font-medium uppercase px-4 py-0.5 z-10 rounded-xl cursor-pointer'>
        khóa học
      </div>
      <div className='img-wraper'>
        <Image alt='' src='https://iweb.tatthanh.com.vn/pic/3231/aboutus/images/hoc-tieng-han-mien-phi.jpg' />
      </div>
      <Flex vertical className='p-3'>
        <div className='sub-title uppercase text-lg font-semibold text-gray-900 mb-2'>Giao tiếp tiền trung cấp</div>
        <div className='desc text-gray-500'>
          Khóa giao tiếp tiền trung cấp online của Minh và Huyền nhằm tạo nên bước đệm cho các bạn muốn học tiếng hàn
          tại nhà
        </div>
        <div className='uppercase text-xs mt-3 text-gray-950 cursor-pointer w-fit'>xem thêm</div>
      </Flex>
    </Flex>
  );
};

export default CourseItem;
