'use client';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
type MenuItem = Required<MenuProps>['items'][number];

const Header = () => {
  const items: MenuItem[] = [
    {
      label: 'Trang chủ',
      key: 'home',
    },
    {
      label: 'Giới thiệu',
      key: 'intro',
    },
    {
      label: 'Khóa học',
      key: 'SubMenu',
      children: [
        {
          type: 'group',
          label: 'Item 2',
          children: [
            { label: 'Option 3', key: 'setting:3' },
            { label: 'Option 4', key: 'setting:4' },
          ],
        },
      ],
    },
    {
      label: 'Liên hệ',
      key: 'contact',
    },
  ];

  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />;
};

export default Header;
