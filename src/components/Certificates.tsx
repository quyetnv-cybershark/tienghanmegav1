import CertificateItem from '@/components/CertificateItem';
import { Flex } from 'antd';

const ListCertificate = () => {
  return (
    <Flex vertical className='mb-10'>
      <div className='title uppercase text-2xl mb-6 font-semibold text-red-900 text-center w-full'>
        Đội ngũ giảng viên
      </div>
      <Flex justify='center' className='relative right-5'>
        <div className='relative -right-12 top-14 z-30 bg-white p-2'>
          <CertificateItem />
        </div>
        <div className='relative -right-6 z-20 bg-white p-2'>
          <CertificateItem />
        </div>
        <div className='relative top-14 z-10 bg-white p-2'>
          <CertificateItem />
        </div>
      </Flex>
    </Flex>
  );
};

export default ListCertificate;
