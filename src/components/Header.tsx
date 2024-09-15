'use client';

import type { MenuProps } from 'antd';
import { ConfigProvider, Flex, Menu } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
type MenuItem = Required<MenuProps>['items'][number];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname()?.substring(1);

  const items: MenuItem[] = [
    {
      label: 'TRANG CHỦ',
      key: '/home',
    },
    {
      label: (
        <Flex gap={6} align='center'>
          <span>KHÓA HỌC</span>
          <FaCaretDown />
        </Flex>
      ),
      key: '/courses',
      children: [
        { label: 'Sơ cấp 1', key: '/courses/so-cap-1' },
        { label: 'Sơ cấp 2', key: '/courses/so-cap-2' },
        { label: 'Trung cấp 3', key: '/courses/trung-cap-3' },
        { label: 'Giao tiếp', key: '/courses/giao-tiep' },
        { label: 'TOPIK II cấp 3,4,5,6', key: '/courses/topik-2-cap-3-4-5-6' },
        { label: 'Chuyên sâu 1-1', key: '/courses/chuyen-sau' },
      ],
    },
    {
      label: 'CỘNG ĐỒNG',
      key: '/social',
    },
  ];
  const [current, setCurrent] = useState('');
  useEffect(() => {
    setCurrent('/' + pathname);
  }, [pathname]);

  const onClick: MenuProps['onClick'] = (e) => {
    router.push(e.key);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHoverColor: '#c51a08',
            horizontalItemSelectedColor: '#c51a08',
            colorTextBase: '#c51a08',
          },
        },
        token: {
          fontSize: 16,
        },
      }}
    >
      <Flex justify='flex-end' className='px-8 pb-3 bg-background fixed top-0 right-0 left-0 z-50'>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode='horizontal'
          items={items}
          className='header-layout pt-2 pr-8 justify-end bg-background font-[500]'
        />
      </Flex>
      ;
    </ConfigProvider>
  );
};

export default Header;
