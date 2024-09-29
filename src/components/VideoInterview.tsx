import HomeTitle from '@/components/HomeTitle';
import { Flex } from 'antd';
import React from 'react';
import ReactPlayer from 'react-player';

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
      <HomeTitle text='ĐIỂM TIN MEGA' />
      <Flex align='center' justify='center' gap={40} className='w-4/5'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=mSEbvKYqPuI&list=PLmS4UjBHusH_6wzYdyl36oJZZ3MoH1R9L'
          controls
          width='50%'
          height='600px'
          playing={true}
          muted={true}
          loop={true}
        />
        <ReactPlayer
          url='https://www.youtube.com/watch?v=bN2cpgQzX74'
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
