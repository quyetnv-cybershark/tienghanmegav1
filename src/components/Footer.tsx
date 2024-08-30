import { Flex, Image } from 'antd';

const Footer = () => {
  return (
    <Flex className='bg-white w-full'>
      <Flex justify='center' className='w-4/5 p-8 '>
        <Flex vertical className='w-2/3'>
          <Flex className='mb-8'>
            <div className='translate-y-2'>
              <Image src='/logoRed.png' alt='' height={48} width={48} preview={false} />
            </div>
            <div className='border-l-2 border-solid border-red-700 mr-8 ml-4'></div>
            <Flex vertical>
              <div className='uppercase font-bold text-2xl text-primaryColor'>TIẾNG HÀN MEGA</div>
              <div className='mt-1 italic text-yellow-700'>Mega Korean Mastery</div>
            </Flex>
          </Flex>

          <Flex vertical gap={8}>
            <div className='border-b-2 border-solid border-red-400 w-full'></div>
            <Flex align='center'>
              <div className='ml-2  font-bold'>
                <span className='text-black font-normal'> Cơ sở Hà Nội:</span>{' '}
                <span className='text-sm text-primaryColor font-[600]'>Tòa S2.03 Vinhomes Ocean Park</span>
              </div>
            </Flex>
            <div className='border-b-2 border-solid border-red-400 w-full'></div>
            <Flex align='center'>
              <div className='ml-2 text-white'>
                <span className='text-black font-normal'>Hotline:</span>{' '}
                <span className='text-sm text-primaryColor font-[600]'>0816525433</span>
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
