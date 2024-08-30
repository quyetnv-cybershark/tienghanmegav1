import type { FormProps } from 'antd';
import { Button, Flex, Form, Input } from 'antd';
import Image from 'next/image';
import React from 'react';

type FieldType = {
  name?: string;
  email?: string;
};

const handleSubmit = async (formData: any) => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  console.log('response :>> ', response);
  if (response.ok) {
    alert('Contract form sent successfully!');
  } else {
    alert('Failed to send contract form.');
  }
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
  handleSubmit(values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const FormRegister: React.FC = () => (
  <Flex vertical align='center' className='w-full home-form'>
    <div className='title uppercase text-2xl font-semibold text-red-900 text-center w-full mb-6'>
      Đăng ký nhận tư vấn miễn phí
    </div>
    <Flex
      className='w-full h-[70vh] pt-8 px-12 pb-0 relative bg-[#CB2624]'
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
          <Input className='h-[40px] ' placeholder='Họ và tên' />
        </Form.Item>

        <Form.Item
          label={<span className='text-[16px] w-max text-nowrap text-primaryColor font-[500]'>Số điện thoại</span>}
          name='phone'
          rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
        >
          <Input className='h-[40px] ' placeholder='Số điện thoại' />
        </Form.Item>

        <Form.Item
          label={<span className='text-[16px] w-max text-nowrap text-primaryColor font-[500]'>Email</span>}
          name='email'
          rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
        >
          <Input className='h-[40px] ' placeholder='Email' />
        </Form.Item>
        <Form.Item
          label={<span className='text-[16px] w-max text-nowrap text-primaryColor font-[500]'>Khóa học quan tâm</span>}
          name='course'
          rules={[{ required: true, message: 'Vui lòng chọn hóa học!' }]}
        >
          <Input className='h-[40px] ' placeholder='Email' />
        </Form.Item>
        <Form.Item
          label={<span className='text-[16px] w-max text-nowrap text-primaryColor font-[500]'>Mục tiêu</span>}
          name='target'
          rules={[{ required: true, message: 'Vui lòng nhập mục tiêu của bạn!' }]}
        >
          <Input className='h-[40px] ' placeholder='Email' />
        </Form.Item>
        <Flex className='w-full' justify='center'>
          <Button
            className='rounded-full w-3/5 mt-6'
            type='primary'
            htmlType='submit'
            style={{
              backgroundColor: '#c51a08',
              padding: '22px 0',
              fontWeight: 600,
            }}
          >
            Đặt lịch ngay
          </Button>
        </Flex>
      </Form>
      <div className='relative h-full w-[600px] overflow-hidden'>
        <Image alt='' src='/iconRegister1.png' width={80} height={80} className='absolute bottom-[120px] left-8' />
        <Image alt='' src='/imgForm.png' width={6000} height={6000} className='absolute bottom-[-160px]' />
      </div>
    </Flex>
  </Flex>
);

export default FormRegister;
