import { BaseCourseProps } from '@/app/courses/BaseCourse';
import { Flex } from 'antd';
import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';

const ChuyenSaupage = () => {
  const ChuyenSaupageData: BaseCourseProps = {
    imgUrl: '/course-page/chuyensau.svg',
    title: 'Chuyên sâu 1-1',
    output: 'cam kết đầu ra tương tự các khóa cùng trình độ',
    overviews: [
      {
        title: 'Tổng quan khóa học',
        overviewsDescs: [
          {
            title: 'Đối tượng học:',
            desc: 'Dành cho người muốn học theo lộ trình cá nhân hóa, linh hoạt thời gian và tiết kiệm thời gian ôn luyện.',
          },
          {
            title: 'Thời gian học:',
            desc: 'Do giáo viên và học viên tự sắp xếp.',
          },
          {
            title: 'Giáo trình học:',
            desc: 'Giáo trình cá nhân hóa dựa theo mục tiêu của học viên.',
          },
        ],
      },
    ],
  };
  return (
    <Flex style={{ height: 'calc(100vh - 66px)' }} className='bg-background overflow-hidden'>
      <div className='w-[30%] absolute top-0 bottom-0 right-0 left-0'>
        <div
          className='absolute top-0 bottom-0 right-0 left-0 z-50'
          style={{
            backgroundImage: `url(${ChuyenSaupageData.imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
      <div className='w-[30%]'></div>
      <Flex vertical justify='flex-start' className='flex-1 ml-20 mt-12 relative overflow-y-scroll overflow-x-hidden'>
        <Flex vertical gap={20} className='content w-4/5 relative h-fit max-w-[60%]'>
          <div className='title text-primaryColor text-7xl font-[900]'>{ChuyenSaupageData.title}</div>
          {ChuyenSaupageData.overviews.map((item) => {
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
            <div className='text-primaryColor uppercase font-[800] text-2xl'>{ChuyenSaupageData.output}</div>
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

export default ChuyenSaupage;
