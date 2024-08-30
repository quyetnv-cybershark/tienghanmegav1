import { Flex } from 'antd';

const ListAdvantages = () => {
  const advantages = [
    {
      title: 'CAM KẾT ĐẦU RA',
      desc: 'Không qua, học lại miễn phí',
    },
    {
      title: 'ĐA DẠNG LỊCH HỌC',
      desc: 'Lựa chọn dễ dàng',
    },
    {
      title: 'GIÁO TRÌNH CHUYÊN SÂU',
      desc: 'Bám sát đề thi TOPIK',
    },
    {
      title: 'GIÁO VIÊN CHẤT LƯỢNG',
      desc: 'Trình độ TOPIK5 trở lên, tối thiểu 3 năm kinh nghiệm',
    },
  ];
  return (
    <Flex className='w-full' justify='center'>
      <Flex justify='space-between' className='w-3/4'>
        {advantages.map((item) => (
          <Flex vertical gap={24} align='center' className='w-1/5' key={item.title}>
            <Flex vertical gap={3}>
              <div className='text-center text-black font-semibold text-base w-max'>{item.title}</div>
              <div className='text-center text-black font-normal text-sm'>{item.desc}</div>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default ListAdvantages;
