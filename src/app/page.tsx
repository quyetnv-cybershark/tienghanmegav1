'use client';
import { Flex } from 'antd';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function Home() {
  const [openButton, setOpenButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenButton(true);
    }, 5000);
  }, []);

  return (
    <Flex
      vertical
      align='center'
      justify='center'
      className='h-[60vh] relative w-full overflow-hidden'
      style={{
        height: 'calc(100vh - 66px)',
      }}
    >
      <div
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
        className='bg-background'
      >
        <ReactPlayer
          url='/introMega.mp4'
          controls={false}
          width='100%'
          height='100%'
          playing={true}
          muted={true}
          loop={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Flex vertical align='center' justify='flex-end' className='absolute top-0 right-0 left-0 bottom-0 z-10'>
        {openButton && (
          <div
            className='buttons relative mb-8'
            style={{
              animation: openButton ? 'moveUp 1s ease-in-out forwards' : '',
            }}
          >
            <Link href='/home' className='blob-btn text-[48px] !rounded-full !font-[800]'>
              Chinh phục ngay
              <span className='blob-btn__inner'>
                <span className='blob-btn__blobs'>
                  <span className='blob-btn__blob'></span>
                  <span className='blob-btn__blob'></span>
                  <span className='blob-btn__blob'></span>
                  <span className='blob-btn__blob'></span>
                </span>
              </span>
            </Link>
            <br />

            <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
              <defs>
                <filter id='goo'>
                  <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='10'></feGaussianBlur>
                  <feColorMatrix
                    in='blur'
                    mode='matrix'
                    values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7'
                    result='goo'
                  ></feColorMatrix>
                  <feBlend in2='goo' in='SourceGraphic' result='mix'></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        )}
      </Flex>
    </Flex>
  );
}
