import { Flex } from 'antd';
import { LuShieldCheck } from 'react-icons/lu';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { IoBookOutline } from 'react-icons/io5';
import { PiChalkboardTeacherLight } from 'react-icons/pi';

const ListAdvantages = () => {
  const advantages = [
    {
      title: 'CAM KẾT ĐẦU RA',
      desc: 'Không qua, học lại miễn phí',
      icon: <LuShieldCheck className='text-primaryColor text-[38px]' />,
    },
    {
      title: 'ĐA DẠNG LỊCH HỌC',
      desc: 'Lựa chọn dễ dàng',
      icon: <IoCalendarNumberOutline className='text-primaryColor text-[38px]' />,
    },
    {
      title: 'GIÁO TRÌNH CHUYÊN SÂU',
      desc: 'Bám sát đề thi TOPIK',
      icon: <IoBookOutline className='text-primaryColor text-[38px]' />,
    },
    {
      title: 'GIÁO VIÊN CHẤT LƯỢNG',
      desc: 'Trình độ TOPIK 5 trở lên, tối thiểu 3 năm kinh nghiệm',
      icon: <PiChalkboardTeacherLight className='text-primaryColor text-[38px]' />,
    },
  ];
  return (
    <Flex className='w-full' justify='center'>
      <Flex justify='space-between' className='w-3/4'>
        {advantages.map((item) => (
          <Flex vertical gap={24} align='center' className='w-1/4 mx-3' key={item.title}>
            {item.icon}
            <Flex vertical gap={10}>
              <div className='text-center text-primaryColor font-[800] text-[18px] w-full'>{item.title}</div>
              <div className='text-center text-black font-[600] text-[18px]'>{item.desc}</div>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default ListAdvantages;
