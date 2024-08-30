'use client';

import Banner from '@/components/Banner';
import Courses from '@/components/Courses';
import Feedbacks from '@/components/Feedbacks';
import Footer from '@/components/Footer';
import FormRegister from '@/components/FormRegister';
import ListAdvantages from '@/components/ListAdvantage';
import Teachers from '@/components/Teachers';
import VideoInterview from '@/components/VideoInterview';
import { Flex } from 'antd';

export default function HomePage() {
  return (
    <Flex vertical className='bg-white'>
      <div className='mb-10'>
        <Banner />
      </div>
      <Flex vertical gap={40} justify='center' align='center' className='w-full'>
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
