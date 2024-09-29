'use client';

import Banner from '@/components/Banner';
import Courses from '@/components/Courses';
import FacebookChat from '@/components/FacebookChat';
import Feedbacks from '@/components/Feedbacks';
import Footer from '@/components/Footer';
import FormRegister from '@/components/FormRegister';
import ListAdvantages from '@/components/ListAdvantage';
import Teachers from '@/components/Teachers';
import VideoInterview from '@/components/VideoInterview';
import { listStudentRegisters, openNotification } from '@/utils/openNotification';
import { Flex } from 'antd';
import Image from 'next/image';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const showNotification = () => {
      const randomStudent = listStudentRegisters[Math.floor(Math.random() * listStudentRegisters.length)];
      openNotification({
        pauseOnHover: true,
        message: <span className='font-bold'>{randomStudent.title}</span>,
        icon: (
          <Flex align='center' justify='center'>
            <Image
              alt={randomStudent.imgName}
              src={`/student-register/${randomStudent.imgName}`}
              width={46}
              height={46}
              objectFit='cover'
              className='rounded-full'
              style={{ objectFit: 'cover', width: '46px', height: '46px', marginRight: '8px' }}
            ></Image>
          </Flex>
        ),
        description: <span className='text-green-600'>Đăng ký thành công</span>,
        duration: 3,
      });

      // Thiết lập lại khoảng thời gian ngẫu nhiên từ 10s đến 60s
      const randomInterval = Math.floor(Math.random() * (60 - 10 + 1) + 10) * 1000; // Giá trị ngẫu nhiên từ 10 đến 60 giây
      setTimeout(showNotification, randomInterval);
    };

    // Bắt đầu thông báo đầu tiên
    const initialInterval = Math.floor(Math.random() * (60 - 10 + 1) + 10) * 1000; // Giá trị ngẫu nhiên từ 10 đến 60 giây
    const initialTimeout = setTimeout(showNotification, initialInterval);

    return () => clearTimeout(initialTimeout);
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
        <section id='registerSection' className='w-full'>
          <FormRegister />
        </section>
      </Flex>
      <FacebookChat />
      <Footer />
    </Flex>
  );
}
