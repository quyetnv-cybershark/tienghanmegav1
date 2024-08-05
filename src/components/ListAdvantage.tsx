import { Flex } from 'antd';
import React from 'react';
import { CarOutlined, UsergroupAddOutlined } from '@ant-design/icons';

const ListAdvantages = () => {
  return (
    <Flex className='w-full' justify='center'>
      <Flex justify='space-between' className='w-3/4'>
        <Flex vertical gap={30} align='center' className='w-1/5 text-center text-black font-semibold'>
          <CarOutlined className='text-[32px]' style={{ color: 'rgb(62 187 180)' }} />
          Cam kết đầu ra không đạt học lại miễn phí + 100% phí thi lại
        </Flex>
        <Flex vertical gap={30} align='center' className='w-1/5 text-center text-black font-semibold'>
          <CarOutlined className='text-[32px]' style={{ color: 'rgb(62 187 180)' }} />
          Đa dạng lớp với tất cả trình độ, dễ dàng lựa chọn
        </Flex>
        <Flex vertical gap={30} align='center' className='w-1/5 text-center text-black font-semibold'>
          <CarOutlined className='text-[32px]' style={{ color: 'rgb(62 187 180)' }} />
          Bộ giáo trình chuẩn tiếng Hàn trong bài thi topik
        </Flex>
        <Flex vertical gap={30} align='center' className='w-1/5 text-center text-black font-semibold'>
          <UsergroupAddOutlined className='text-[32px]' style={{ color: 'rgb(62 187 180)' }} />
          Đội ngũ giáo viên kinh nghiệm, nhiệt huyết và đạt nhiều thành tích cao
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ListAdvantages;
