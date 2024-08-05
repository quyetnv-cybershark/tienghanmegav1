import type { FormProps } from 'antd';
import { Button, Flex, Form, Input } from 'antd';
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
  <Flex vertical align='center' className='w-full'>
    <div className='title uppercase text-2xl mb-6 font-semibold text-red-900 text-center w-full'>
      Đăng ký nhận tư vấn miễn phí
    </div>
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item<FieldType>
        label='name'
        name='name'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label='Email'
        name='email'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Flex>
);

export default FormRegister;
