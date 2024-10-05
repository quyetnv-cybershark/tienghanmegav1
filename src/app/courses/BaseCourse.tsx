import React from 'react';
import { Flex } from 'antd';
import { GoDotFill } from 'react-icons/go';
import Image from 'next/image';
import Link from 'next/link';
import FallingLeaves from '@/components/FallingLeaves';
export interface BaseCourseProps {
  imgUrl: string;
  title: string;
  hidedot?: boolean;
  overviews: {
    title: string;
    overviewsDescs: {
      title: string;
      desc: string;
    }[];
  }[];
  output: string;
}
const BaseCourse = ({ imgUrl, title, overviews, output, hidedot = false }: BaseCourseProps) => {
  return (
    <Flex style={{ height: 'calc(100vh - 66px)' }} className='bg-background overflow-hidden'>
      {' '}
      <FallingLeaves />
      <div className='w-[30%] absolute top-0 bottom-0 right-0 left-0'>
        <div
          className='absolute top-0 bottom-0 right-0 left-0 z-50'
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
      <div className='w-[30%]'></div>
      <Flex vertical justify='flex-start' className='flex-1 ml-20 mt-12 relative overflow-y-scroll overflow-x-hidden'>
        <Flex vertical gap={20} className='content w-4/5 relative h-fit max-w-[60%]'>
          <div
            className='title text-primaryColor text-8xl font-[900] merriweather-sans-bold leading-[124px]'
            style={
              title.toLocaleLowerCase() === 'Topik II cấp độ 3-6'.toLocaleLowerCase()
                ? {
                    fontSize: '72px',
                    width: 'max-content',
                  }
                : {}
            }
          >
            {title}
          </div>
          {overviews.map((item) => {
            return (
              <Flex vertical gap={8} key={item.title}>
                <div className='text-[#f19808] font-[900] text-3xl mt-6 mb-2 uppercase'>{item.title}</div>
                {item.overviewsDescs.map((overviewsDesc) => {
                  return (
                    <Flex key={overviewsDesc.title} gap={8}>
                      <div>
                        <GoDotFill className='mt-[3px] text-primaryColor text-lg w-5' />
                      </div>
                      <Flex gap={8} className='text-black text-lg'>
                        {overviewsDesc.title ? (
                          <span className='font-bold text-justify'>
                            {overviewsDesc.title} {overviewsDesc.desc}
                          </span>
                        ) : (
                          <span className='font-bold text-justify'>{overviewsDesc.desc}</span>
                        )}
                      </Flex>
                    </Flex>
                  );
                })}
              </Flex>
            );
          })}

          <div className='text-[#f19808] font-[900] text-3xl mt-6 mb-2 uppercase'>CHẤT LƯỢNG ĐẦU RA</div>
          <Flex gap={8}>
            {!hidedot && (
              <div>
                <GoDotFill className='mt-[3px] text-primaryColor text-lg w-5' />
              </div>
            )}
            <div className='text-primaryColor uppercase font-[800] text-2xl mb-6'>{output}</div>
          </Flex>
          <div className='absolute top-0 -right-[85%]'>
            <Image unoptimized alt='' src='/course-page/ring.png' height={400} width={400}></Image>
          </div>
        </Flex>
        <div className='absolute -bottom-16 right-8 cursor-pointer zoom-in-zoom-out'>
          <Link href='/home#registerSection' className='blob-btn text-[48px] !rounded-full !font-[800] uppercase'>
            Đăng ký ngay
            <div className='blob-btn__inner'>
              <span className='blob-btn__blobs'>
                <span className='blob-btn__blob'></span>
                <span className='blob-btn__blob'></span>
                <span className='blob-btn__blob'></span>
                <span className='blob-btn__blob'></span>
              </span>
            </div>
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
      </Flex>
    </Flex>
  );
};

export default BaseCourse;
