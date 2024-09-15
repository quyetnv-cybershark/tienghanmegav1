import { Flex } from 'antd';
import Image from 'next/image';
import React from 'react';

const SocialPage = () => {
  const listSocials = [
    {
      socialName: 'tiktok',
      imgUrl: '/social-page/tiktok.jpg',
      desc: 'Kênh LIVESTREAM chữa đề, học thử vào 14h - 16h hàng ngày',
    },
    {
      socialName: 'facebook',
      imgUrl: '/social-page/facebook.jpg',
      desc: 'Fanpage chia sẻ kiến thức và thông báo sự kiện của Mega',
    },
    {
      socialName: 'youtube',
      imgUrl: '/social-page/youtube.jpg',
      desc: 'Kênh tổng hợp kiến thức, các buổi học tại Mega',
    },
  ];
  return (
    <Flex vertical align='center' className='w-full h-full mt-[47px] bg-background'>
      <div className='title text-primaryColor text-6xl font-bold uppercase mt-[5%]'>Thực chiến tiếng hàn tại mega</div>
      <Flex className='w-4/5' gap={36} flex={1} align='center'>
        {listSocials.map((social) => (
          <Flex vertical align='center' gap={24} className='w-1/3' key={social.socialName}>
            <div className='sub-title uppercase text-primaryColor font-[800] text-2xl'>{social.socialName}</div>
            <Image alt='' src={social.imgUrl} width={400} height={600}></Image>
            <div className='font-[600] text-xl text-black text-center'>{social.desc}</div>
            <div className='uppercase text-xl font-[600] px-12 py-2 rounded-xl bg-primaryColor text-white cursor-pointer hover:opacity-80 transition-all duration-300'>
              tham gia
            </div>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default SocialPage;
