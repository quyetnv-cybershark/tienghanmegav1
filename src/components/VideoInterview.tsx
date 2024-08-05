import { Flex } from 'antd';
import React from 'react';

const VideoInterview: React.FC = () => (
  <Flex vertical align='center' justify='center'>
    <div className='title uppercase text-4xl font-semibold text-red-900 text-center w-full mb-6'>Phỏng vấn</div>
    <Flex align='center' justify='center' gap={40} className='w-4/5'>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/eONB3Lx8iqk?si=exQNCruF7OHL0UxD?autoplay=1'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        className='rounded-xl'
      ></iframe>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/zxo1_NKq5_s?si=f71IgK7M1jBOY5Cy'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        className='rounded-xl'
      ></iframe>
    </Flex>
  </Flex>
);

export default VideoInterview;
