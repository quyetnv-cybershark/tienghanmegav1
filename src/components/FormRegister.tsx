import { Button, Flex, Form, FormProps, Input, Select } from 'antd';
import Image from 'next/image';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

export type FormValuesProps = {
  name: string;
  phone: string;
  email: string;
  course: string;
  target: string;
};

const handleSubmit = async (formData: FormValuesProps) => {
  await fetch('/api/consultant', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
};

const onFinish: FormProps<FormValuesProps>['onFinish'] = (values) => {
  console.log('Success:', values);
  handleSubmit(values);
};

const onFinishFailed: FormProps<FormValuesProps>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const FormRegister: React.FC = () => {
  return (
    <Flex vertical align='center' className='w-full home-form'>
      <div className='title uppercase text-3xl font-[700] text-red-900 text-center w-full mb-6'>
        Đăng ký nhận tư vấn miễn phí
      </div>
      <Flex
        className='w-full h-[70vh] pt-8 px-12 pb-0 relative bg-[#CB2624] overflow-hidden'
        align='center'
        justify='center'
        // style={{
        //   backgroundImage: "url('/registerBg.png')",
        //   backgroundSize: 'cover', // Optional: To cover the entire element
        //   backgroundPosition: 'center', // Optional: To center the image
        //   backgroundRepeat: 'no-repeat',
        // }}
        // background:
        //   ' linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(254, 227, 122, 0.9) 50%, rgba(197, 26, 8, 0.9) 100%)',
      >
        <Image alt='' src='/iconRegister1.png' width={80} height={80} className='absolute top-3 right-3' />
        <Image alt='' src='/iconRegister1.png' width={80} height={80} className='absolute top-3 left-3' />
        <Image alt='' src='/iconRegister2.png' width={24} height={24} className='absolute bottom-[120px] right-16' />

        <Form
          className='w-3/5  border-solid border-2 border-primaryColor rounded-2xl p-6 bg-white mb-8'
          layout='vertical'
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
            <Input className='h-[40px] border-solid border-2 focus:border-red-600 px-2' placeholder='Email' />
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
        <div className='relative h-full w-[600px] overflow-hidden mr-[20%]'>
          <Image alt='' src='/iconRegister1.png' width={80} height={80} className='absolute bottom-[120px] left-8' />
          <Image
            alt=''
            src='/imgForm.svg'
            width={80}
            height={80}
            className='absolute bottom-[-50%] z-10 w-[300%] h-[200%]'
          />
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
            src='/contract-form/Asset5.svg'
            height={120}
            width={120}
            className='absolute top-16 left-[240px]'
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
