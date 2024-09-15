'use client';

import Banner from '@/components/Banner';
import Courses from '@/components/Courses';
import Feedbacks from '@/components/Feedbacks';
import Footer from '@/components/Footer';
import FormRegister from '@/components/FormRegister';
import ListAdvantages from '@/components/ListAdvantage';
import Teachers from '@/components/Teachers';
import VideoInterview from '@/components/VideoInterview';
import { openNotification } from '@/utils/openNotification';
import { Flex } from 'antd';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const interval = setInterval(() => {
      openNotification({
        message: <span className='text-green font-bold'>Success</span>,
        description: <span className='text-green'>Đăng ký thành công</span>,
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex vertical className='bg-background'>
      <div className='mb-10'>
        <Banner />
      </div>
      <Flex vertical gap={40} justify='center' align='center' className='w-full bg-background'>
        <Flex vertical gap={40} className='w-[80vw]'>
          <ListAdvantages />
          <VideoInterview />
          <Courses />
          <Teachers />
          <Feedbacks />
        </Flex>
        <FormRegister />
      </Flex>
      <Footer />
    </Flex>
  );
}
