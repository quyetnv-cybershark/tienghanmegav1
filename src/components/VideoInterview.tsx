import { Flex } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoInterview: React.FC = () => {
  // useEffect(() => {
  //   const iframe = document.getElementById('video1') as HTMLIFrameElement | null;

  //   if (iframe) {
  //     iframe.onload = function () {
  //       const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

  //       // Kiểm tra nếu tài liệu bên trong iframe tồn tại
  //       if (iframeDoc) {
  //         const divInIframe = iframeDoc.querySelector('div');
  //         console.log('divInIframe :>> ', divInIframe);
  //         if (divInIframe) {
  //           divInIframe.style.backgroundColor = '#ffffff';
  //         }
  //       }
  //     };
  //   }
  // }, []);

  return (
    <Flex vertical align='center' justify='center'>
      <div className='title uppercase text-3xl font-[700] text-red-900 text-center w-full mb-6'>ĐIỂM TIN MEGA</div>
      <Flex align='center' justify='center' gap={40} className='w-4/5'>
        <ReactPlayer
          url='https://youtu.be/bN2cpgQzX74'
          controls
          width='50%'
          height='600px'
          playing={true}
          muted={true}
          loop={true}
        />
        <ReactPlayer
          url='https://www.youtube.com/watch?v=mSEbvKYqPuI'
          controls
          width='50%'
          height='600px'
          playing={true}
          muted={true}
          loop={true}
        />
        {/* <iframe
          width='50%'
          height='600px'
          src='https://www.youtube.com/embed/mSEbvKYqPuI?autoplay=1&mute=1'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          id='video1'
        ></iframe> */}
      </Flex>
    </Flex>
  );
};

export default VideoInterview;
