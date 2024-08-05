'use client';

import Banner from '@/components/Banner';
import ListCertificate from '@/components/Certificates';
import Courses from '@/components/Courses';
import Feedbacks from '@/components/Feedbacks';
import Footer from '@/components/Footer';
import FormRegister from '@/components/FormRegister';
import ListAdvantages from '@/components/ListAdvantage';
import VideoInterview from '@/components/VideoInterview';
import { Flex } from 'antd';

export default function HomePage() {
  return (
    <Flex vertical gap={32} className='bg-white'>
      <Banner />
      <ListAdvantages />
      <VideoInterview />
      <Courses />
      <ListCertificate />
      <Feedbacks />
      <FormRegister />
      <Footer />
    </Flex>
  );
}
