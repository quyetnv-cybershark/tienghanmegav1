import HomeTitle from '@/components/HomeTitle';
import { Button, Flex, Form, Input, Select } from 'antd';
import Image from 'next/image';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

const FormRegister: React.FC = () => {
  return (
    <Flex vertical align='center' className='w-full home-form'>
      <HomeTitle text=' Đăng ký nhận tư vấn miễn phí' />
      <Flex
        className='w-full h-[70vh] pt-8 px-12 pb-0 relative bg-[#CB2624] overflow-hidden'
        align='center'
        justify='center'
      >
        <Image
          alt=''
          src='/contract-form/footer-vang.svg'
          width={240}
          height={240}
          className='absolute -top-10 -right-[30px]'
        />
        <Image
          alt=''
          src='/contract-form/footer-sao.svg'
          width={240}
          height={240}
          className='absolute -top-10 -left-[40px]'
        />
        <Image
          alt=''
          src='/contract-form/footer-nui.svg'
          width={240}
          height={240}
          className='absolute bottom-[20%] -left-[40px]'
        />

        <Form
          className='w-3/5  border-solid border-2 border-primaryColor rounded-2xl p-6 bg-white mb-8'
          layout='vertical'
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete='off'
        >
          <Form.Item
            label={<span className='text-[16px] w-max text-nowrap text-primaryColor font-[500]'>Họ và tên</span>}
            name='name'
            rules={[{ required: true, message: 'Vui lòng nhập Họ và tên!' }]}
          >
            <Input className='h-[40px] border-solid border-2 focus:border-red-600 px-2' placeholder='Họ và tên' />
          </Form.Item>

          <Form.Item
            label={<span className='text-[16px] w-max text-nowrap text-primaryColor font-[500]'>Số điện thoại</span>}
            name='phone'
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
          >
            <Input className='h-[40px] border-solid border-2 focus:border-red-600 px-2' placeholder='Số điện thoại' />
          </Form.Item>

          <Form.Item
            label={<span className='text-[16px] w-max text-nowrap text-primaryColor font-[500]'>Email</span>}
            name='email'
            rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
          >
            <Input className='h-[40px] border-solid border-2 focus:border-red-600 px-2' placeholder='Email' />
          </Form.Item>
          <Form.Item
            label={
              <span className='text-[16px] w-max text-nowrap text-primaryColor font-[500]'>Khóa học quan tâm</span>
            }
            name='course'
            rules={[{ required: true, message: 'Vui lòng chọn khóa học quan tâm!' }]}
          >
            <Select
              allowClear
              options={[
                { value: 'socap1', label: 'SƠ CẤP 1' },
                { value: 'socap2', label: 'SƠ CẤP 2' },
                { value: 'trungcap3', label: 'TRUNG CẤP 3' },
                { value: 'topik2', label: 'TOPIK II' },
                { value: 'giaotiep', label: 'GIAO TIẾP' },
                { value: 'chuyensau', label: 'CHUYÊN SÂU 1:1' },
              ]}
              placeholder='Chọn khóa học quan tâm'
              className='border-gray-200 border-2 border-solid h-[40px] rounded-md'
            />
          </Form.Item>
          <Form.Item
            label={<span className='text-[16px] w-max text-nowrap text-primaryColor font-[500]'>Mục tiêu</span>}
            name='target'
            rules={[{ required: true, message: 'Vui lòng nhập mục tiêu của bạn!' }]}
          >
            <Input className='h-[40px] border-solid border-2 focus:border-red-600 px-2' placeholder='Mục tiêu' />
          </Form.Item>
          <Flex className='w-full' justify='center'>
            <Button
              className='rounded-full w-3/5 mt-6 text-xl bg-primaryColor px-8 py-2 h-auto hover:!bg-primaryColor font-[400] uppercase text-white'
              type='primary'
              htmlType='submit'
            >
              Đặt lịch ngay
            </Button>
          </Flex>
        </Form>
        <div className='relative h-full w-[600px] mr-[20%]'>
          <Image alt='' src='/iconRegister1.png' width={80} height={80} className='absolute bottom-[120px] left-8' />
          <div className=' absolute bottom-0 -right-12 z-20'>
            <Image
              alt=''
              src='/contract-form/footer-topik.svg'
              width={420}
              height={420}
              className='absolute -top-[136px] -right-[125px]'
              priority
            />
            <Image
              alt=''
              src='/contract-form/footer-giao-tiep.svg'
              width={320}
              height={320}
              className='absolute -top-[80px] -left-[60px]'
              priority
            />
            <Image alt='' src='/imgForm.svg' width={800} height={800} className='scale-125' priority />
          </div>
        </div>

        <Flex
          style={{
            backgroundImage: "url('/contract-form/sun.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: 700,
            width: 700,
          }}
          className='absolute -bottom-[220px] -right-[220px] rounded-full'
          align='flex-start'
          justify='flex-start'
          vertical
        >
          <Image
            alt=''
            src='/contract-form/footer-nui-do.svg'
            height={240}
            width={240}
            className='absolute -top-[24px] left-[180px]'
            priority
          ></Image>
          <Flex vertical gap={24} className='max-w-[35%] ml-[20%] mt-[25%] z-20 text-xl text-black font-bold'>
            <Flex vertical className='w-full'>
              <Flex gap={8} align='center'>
                <FaPhoneAlt className='text-[#f99d1c] h-6 w-6 p-1 rounded-full bg-black' />
                <span>Hotline</span>
              </Flex>
              <div className='border-b-2 border-gray-600 border-solid my-2'></div>
              <div>0816 525 433</div>
            </Flex>
            <Flex vertical className='w-full'>
              <Flex gap={8} align='center'>
                <MdLocationPin className='text-[#f99d1c] h-6 w-6 p-[3px] rounded-full bg-black' />
                <span>Cơ sở Hà Nội</span>
              </Flex>
              <div className='border-b-2 border-gray-600 border-solid my-2'></div>
              <Flex vertical className='text'>
                <span>Sảnh B Tòa S2.03</span>
                <span> Vinhomes Ocean Park</span>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FormRegister;
