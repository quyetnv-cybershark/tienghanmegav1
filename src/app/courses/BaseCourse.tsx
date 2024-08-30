import React from 'react';
import { Flex, Image } from 'antd';
import { GoDotFill } from 'react-icons/go';
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
    <Flex style={{ height: 'calc(100vh - 66px)' }} className='bg-white overflow-hidden'>
      <div className='w-2/5 absolute top-0 bottom-0 right-0 left-0'>
        <div
          className='absolute top-0 bottom-0 right-0 left-0'
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
      <div className='w-2/5'></div>
      <Flex vertical justify='center' className='flex-1 ml-10 relative'>
        <div className='content w-4/5 relative h-fit'>
          <div className='title text-primaryColor text-6xl font-bold'>{title}</div>
          {overviews.map((item) => {
            return (
              <Flex vertical gap={8} key={item.title}>
                <div className='text-yellow-500 font-bold text-3xl mt-6 mb-2'>{item.title}</div>
                {item.overviewsDescs.map((overviewsDesc) => {
                  return (
                    <Flex key={overviewsDesc.title} gap={8}>
                      <GoDotFill className='mt-[3px] text-primaryColor text-lg' />
                      <div className='text-black text-lg'>
                        {overviewsDesc.title && <span className='font-bold'>{overviewsDesc.title}</span>}{' '}
                        {overviewsDesc.desc}
                      </div>
                    </Flex>
                  );
                })}
              </Flex>
            );
          })}

          <div className='text-yellow-500 font-bold text-3xl mt-6 mb-2'>CHẤT LƯỢNG ĐẦU RA</div>
          <Flex gap={8}>
            <GoDotFill className='mt-[3px] text-primaryColor text-lg' />
            <div className='text-primaryColor uppercase font-bold text-xl'>{output}</div>
          </Flex>
          <div className='absolute top-0 -right-[450px]'>
            <Image alt='' src='/course-page/ring.png' height={400} width={400} preview={false}></Image>
          </div>
        </div>
        <div className='register-btn uppercase bg-primaryColor w-fit font-bold text-white text-2xl px-8 py-4 rounded-full absolute bottom-5 right-5'>
          đăng ký ngay
        </div>
      </Flex>
    </Flex>
  );
};

export default BaseCourse;
