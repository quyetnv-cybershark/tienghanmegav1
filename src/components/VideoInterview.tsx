import { Flex } from 'antd';
import React from 'react';
import ReactPlayer from 'react-player';

const VideoInterview: React.FC = () => (
  <Flex vertical align='center' justify='center'>
    <div className='title uppercase text-2xl font-semibold text-red-900 text-center w-full mb-6'>ĐIỂM TIN MEGA</div>
    <Flex align='center' justify='center' gap={40} className='w-4/5'>
      <ReactPlayer
        url='/https://www.youtube.com/watch?v=mSEbvKYqPuI'
        controls
        width='45%'
        height='100%'
        playing={true}
        muted={true}
        loop={true}
      />
      <ReactPlayer
        url='/https://www.youtube.com/watch?v=mSEbvKYqPuI'
        controls
        width='55%'
        height='100%'
        playing={true}
        muted={true}
        loop={true}
      />
    </Flex>
  </Flex>
);

export default VideoInterview;
