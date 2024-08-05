import { FacebookOutlined, GithubOutlined, HomeOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import React from 'react';

const Footer = () => {
  return (
    <Flex className='bg-orange-300 w-full'>
      <Flex justify='center' className='w-4/5 p-8 '>
        <Flex vertical className='w-2/3'>
          <Flex>
            <GithubOutlined className='text-3xl text-red-900' />
            <div className='border-l-2 border-solid border-red-700 mx-8'></div>
            <Flex vertical>
              <div className='uppercase font-bold text-2xl text-gray-900'>Tên trung tâm</div>
              <div className='mt-1 italic text-gray-600'>Slogan của trung tâm</div>
            </Flex>
          </Flex>
          <Flex className='text-gray-800 text-sm my-5'>
            Thuộc sở hữu của: <div className='uppercase font-bold ml-1'>công ty cổ phần giáo dục Huyền Minh</div>
          </Flex>
          <Flex vertical gap={8}>
            <div className='border-b-2 border-solid border-red-400 w-full'></div>
            <Flex align='center'>
              <HomeOutlined className='text-3xl text-purple-700' />
              <div className='ml-2 text-red-800 font-bold'>
                Cơ sở Hà Nội: <span className='text-sm font-normal'>Tòa S2.03 Vinhomes Ocean Park</span>
              </div>
            </Flex>
            <div className='border-b-2 border-solid border-red-400 w-full'></div>
            <Flex align='center'>
              <FacebookOutlined className='text-3xl text-purple-700' />
              <div className='ml-2 text-red-800 font-bold'>Để link Facebook ở đây</div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
