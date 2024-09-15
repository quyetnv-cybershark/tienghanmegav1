import React from 'react';
import { Flex } from 'antd';
import { GoDotFill } from 'react-icons/go';
import Image from 'next/image';
export interface BaseCourseProps {
  imgUrl: string;
  title: string;
  overviews: {
    title: string;
    overviewsDescs: {
      title: string;
      desc: string;
    }[];
  }[];
  output: string;
}
const BaseCourse = ({ imgUrl, title, overviews, output }: BaseCourseProps) => {
  return (
    <Flex style={{ height: 'calc(100vh - 66px)' }} className='bg-background overflow-hidden'>
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
          <div className='title text-primaryColor text-7xl font-[900]'>{title}</div>
          {overviews.map((item) => {
            return (
              <Flex vertical gap={8} key={item.title}>
                <div className='text-[#f19808] font-[900] text-3xl mt-6 mb-2 uppercase'>{item.title}</div>
                {item.overviewsDescs.map((overviewsDesc) => {
                  return (
                    <Flex key={overviewsDesc.title} gap={8}>
                      <GoDotFill className='mt-[3px] text-primaryColor text-lg w-5' />
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
            <GoDotFill className='mt-[3px] text-primaryColor text-lg' />
            <div className='text-primaryColor uppercase font-[800] text-2xl'>{output}</div>
          </Flex>
          <div className='absolute top-0 -right-[85%]'>
            <Image unoptimized alt='' src='/course-page/ring.png' height={400} width={400}></Image>
          </div>
        </Flex>
        <div className='register-btn uppercase bg-primaryColor w-fit font-bold text-white text-2xl px-12 py-6 rounded-full absolute bottom-8 right-8 cursor-pointer'>
          đăng ký ngay
        </div>
      </Flex>
    </Flex>
  );
};

export default BaseCourse;
