import { ReadOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { Flex, Image } from 'antd';
import React from 'react';

const CertificateItem = () => {
  return (
    <Flex
      vertical
      className='py-6 px-4 bg-white rounded-2xl'
      justify='center'
      align='center'
      style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px' }}
    >
      <Flex vertical align='center' gap={2} className='px-10'>
        <Image
          alt=''
          src='https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/405207243_298947006452660_7587850999074369241_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFC6n5HzL0Y2O2EDrKy5rMQ0kqsQxP6pOLSSqxDE_qk4syaMImyqb_7C28bJCwQRzgrVvFY2vu4OpbA43GrvwtL&_nc_ohc=5pCg4FImOFIQ7kNvgGxLEfF&_nc_ht=scontent.fhan15-2.fna&oh=00_AYDOk2Lx-DDsmE9rHCf28_GMh8BsaUwsjBWPVdbVZs1hgw&oe=66B2E891'
          width={120}
          height={120}
          className='rounded-full object-cover'
        ></Image>
        <div className='uppercase font-extrabold text-gray-900 text-sm mt-2'>Đào Hồng Ngọc</div>
        <div className='uppercase font-medium text-gray-700 text-xs'>Trưởng phòng đào tạo</div>
      </Flex>
      <div className='line border-b-[1px] border-solid border-gray-400 mt-3 w-full mb-2'></div>
      <Flex gap={10}>
        <SafetyCertificateOutlined className='text-4xl' />
        <Flex vertical gap={2}>
          <div className='uppercase font-medium text-gray-700 text-xs'>Chứng chỉ</div>
          <div className='uppercase font-extrabold text-gray-900 text-sm'>topik 6</div>
        </Flex>
      </Flex>
      <div className='line border-b-[1px] border-solid border-gray-400 mt-3 w-full mb-2'></div>
      <Flex vertical className='experience w-full px-2' align='flex-start'>
        <div className='text-gray-900 font-semibold text-xs w-fit mb-2'>Kinh nghiệm học tập và làm việc:</div>
        <Flex vertical className='w-60' gap={6}>
          <Flex gap={8}>
            <ReadOutlined className='text-gray-900 text-base' />
            <div className='text-xs text-gray-700'>Cử nhân tiếng Hàn tại đại học Hà Nội</div>
          </Flex>
          <Flex gap={8}>
            <ReadOutlined className='text-gray-900 text-base' />
            <div className='text-xs text-gray-700'>Cựu du học sinh tại Hust</div>
          </Flex>
          <Flex gap={8}>
            <ReadOutlined className='text-gray-900 text-base' />
            <div className='text-xs text-gray-700'>7 năm kinh nghiệm giảng dạy tại xã Đình Tổ</div>
          </Flex>
          <Flex gap={8}>
            <ReadOutlined className='text-gray-900 text-base' />
            <div className='text-xs text-gray-700'>Chứng chỉ tiếng Hàn trường tiểu học Đình Tổ số 1</div>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CertificateItem;
