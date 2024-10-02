import { Flex } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SocialPage = () => {
  const listSocials = [
    {
      socialName: 'tiktok',
      imgUrl: '/social-page/tiktok.svg',
      desc: 'Kênh LIVESTREAM chữa đề, luyện phản xạ và học thử vào 15:00 - 16:30 các ngày thứ 3,5,7 hàng tuần',
      openLink: 'https://www.tiktok.com/@tienghanmega',
    },
    {
      socialName: 'facebook',
      imgUrl: '/social-page/facebook.svg',
      desc: 'Fanpage chia sẻ kiến thức, thông báo sự kiện và hỗ trợ học viên của MEGA',
      openLink: 'https://www.facebook.com/tienghanmega/',
    },
    {
      socialName: 'youtube',
      imgUrl: '/social-page/youtube.svg',
      desc: 'Kênh tổng hợp kiến thức, các buổi luyện thi và hoạt động của MEGA',
      openLink: 'https://www.youtube.com/@tienghanmega',
    },
  ];
  // mt-[5%] mb-16
  return (
    <Flex vertical align='center' justify='space-evenly' className='w-full h-full mt-[47px] bg-background'>
      <div className='title text-primaryColor text-6xl font-[800] uppercase -mt-[100px]'>
        Thực chiến tiếng hàn tại mega
      </div>

      <Flex className='w-4/5 h-max -mt-[48px]' gap={36} align='center'>
        {listSocials.map((social) => (
          <Flex vertical align='center' gap={24} className='w-1/3 h-full' key={social.socialName}>
            <Flex vertical align='center' gap={24} className='flex-1'>
              <div className='sub-title uppercase text-primaryColor font-[900] text-2xl'>{social.socialName}</div>
              <Image alt='' src={social.imgUrl} width={400} height={600} className='rounded-lg'></Image>
              <div className='font-[600] text-xl text-black text-center'>{social.desc}</div>
            </Flex>
            <Link href={social.openLink} className='text-white' target='_blank' rel='noopener noreferrer'>
              <div className='uppercase text-xl font-[600] px-12 py-2 rounded-xl bg-primaryColor text-white cursor-pointer hover:opacity-80 transition-all duration-300'>
                tham gia
              </div>
            </Link>
          </Flex>
        ))}
      </Flex>
      {/* <div className='mt-auto mb-10 text-primaryColor text-[28px] font-[500]'>MEGA KOREAN MASTERY</div> */}
    </Flex>
  );
};

export default SocialPage;
