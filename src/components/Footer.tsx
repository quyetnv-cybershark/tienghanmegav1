import { Flex } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';
import { FaAngleRight, FaPhoneVolume } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMailOpenSharp } from 'react-icons/io5';

const Footer = () => {
  const listFooter = [
    {
      key: 1,
      title: 'Trung tâm tiếng Hàn Mega',
      children: [
        {
          icon: <FaPhoneVolume />,
          subTitle: '0816 525 433',
        },
        {
          icon: <IoMailOpenSharp />,
          subTitle: 'tienghanmega@gmai.com',
        },
        {
          icon: <FaLocationDot />,
          subTitle: 'Sảnh B, tòa S2.03 Vinhomes Ocean Park',
        },
      ],
    },
    {
      key: 2,
      title: 'Khóa học tại Mega',
      children: [
        {
          icon: <FaAngleRight />,
          subTitle: (
            <Link
              href='/courses/so-cap-1'
              className='cursor-pointer hover:text-primaryColor transition duration-300 text-black'
            >
              Khóa Sơ Cấp 1
            </Link>
          ),
        },
        {
          icon: <FaAngleRight />,
          subTitle: (
            <Link
              href='/courses/so-cap-2'
              className='cursor-pointer hover:text-primaryColor transition duration-300 text-black'
            >
              Khóa Sơ Cấp 2
            </Link>
          ),
        },
        {
          icon: <FaAngleRight />,
          subTitle: (
            <Link
              href='/courses/trung-cap-3'
              className='cursor-pointer hover:text-primaryColor transition duration-300 text-black'
            >
              Khóa Trung Cấp 3
            </Link>
          ),
        },
        {
          icon: <FaAngleRight />,
          subTitle: (
            <Link
              href='/courses/topik-2-cap-3-4-5-6'
              className='cursor-pointer hover:text-primaryColor transition duration-300 text-black'
            >
              Khóa TOPIK II
            </Link>
          ),
        },
        {
          icon: <FaAngleRight />,
          subTitle: (
            <Link
              href='/courses/giao-tiep'
              className='cursor-pointer hover:text-primaryColor transition duration-300 text-black'
            >
              Giao tiếp
            </Link>
          ),
        },
        {
          icon: <FaAngleRight />,
          subTitle: (
            <Link
              href='/courses/chuyen-sau'
              className='cursor-pointer hover:text-primaryColor transition duration-300 text-black'
            >
              Khóa Chuyên Sâu 1:1
            </Link>
          ),
        },
      ],
    },
    {
      key: 3,
      title: 'Danh mục',
      children: [
        {
          icon: <FaAngleRight />,
          subTitle: (
            <Link href='/home' className='cursor-pointer hover:text-primaryColor transition duration-300 text-black'>
              Trang chủ
            </Link>
          ),
        },
        {
          icon: <FaAngleRight />,
          subTitle: (
            <Link href='/social' className='cursor-pointer hover:text-primaryColor transition duration-300 text-black'>
              Cộng đồng
            </Link>
          ),
        },
      ],
    },
  ];
  return (
    <Flex gap={40} className='bg-white w-full px-[5%] text-black py-16'>
      <Flex gap={40} className='flex-1'>
        {listFooter.map((footerItem) => (
          <Flex gap={12} vertical key={footerItem.title} className='w-1/3'>
            <div className='uppercase text-2xl pb-[6px] border-solid border-b-2 border-primaryColor font-[600]'>
              {footerItem.title}
            </div>
            <Flex vertical gap={8}>
              {footerItem.children.map((item, index) => (
                <Flex
                  key={footerItem.title + index.toString()}
                  gap={6}
                  className='cursor-pointer transition duration-300 group'
                >
                  <span className='group-hover:text-primaryColor transition duration-300'>{item.icon}</span>
                  <span
                    className={clsx('group-hover:text-primaryColor transition duration-300', {
                      capitalize: footerItem.key !== 1,
                    })}
                  >
                    {item.subTitle}
                  </span>
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
      <div className='w-[400px]'>
        <iframe
          src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftienghanmega%2F&tabs=timeline&width=460&height=240&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
          width='460'
          height='240'
          style={{
            border: 'none',
            overflow: 'hidden',
          }}
          title='123123'
          scrolling='no'
          frameBorder='0'
          allowFullScreen={true}
          allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
        ></iframe>
      </div>
    </Flex>
  );
};

export default Footer;
