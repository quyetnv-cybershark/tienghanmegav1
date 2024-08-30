import { Flex, Image } from 'antd';

interface TeacherItemProps {
  teacherName: string;
  teacherIntro: string;
  teacherImg: string;
  certificate: string;
  descs: string[];
}

const TeacherItem = ({ teacherName, certificate, teacherIntro, descs, teacherImg }: TeacherItemProps) => {
  return (
    <Flex
      vertical
      className='teacher-item py-6 px-4 bg-white rounded-2xl hover:scale-105 cursor-pointer transition-all duration-500'
      justify='center'
      align='center'
      style={{ boxShadow: '#c51a08 0px 1px 3px' }}
    >
      <Flex vertical align='center' gap={8} className='px-10'>
        <Image
          alt=''
          src={teacherImg}
          width={120}
          height={120}
          className='rounded-full object-cover'
          preview={false}
        ></Image>
        <div className='uppercase font-extrabold text-gray-900 text-sm mt-2'>{teacherName}</div>
        <div className='uppercase font-medium text-gray-700 text-xs'>{teacherIntro}</div>
      </Flex>
      <div className='line border-b-[1px] border-solid border-gray-400 mt-3 w-full mb-2'></div>
      <Flex gap={10}>
        {/* <SafetyCertificateOutlined className='text-4xl text-primaryColor' /> */}
        <Flex vertical gap={2}>
          <div className='uppercase font-medium text-gray-700 text-xs'>Chứng chỉ</div>
          <div className='uppercase font-extrabold text-gray-900 text-sm'>{certificate}</div>
        </Flex>
      </Flex>
      <div className='line border-b-[1px] border-solid border-gray-400 mt-3 w-full mb-2'></div>
      <Flex vertical className='experience w-full px-2' align='flex-start'>
        <div className='text-gray-900 font-semibold text-xs w-fit mb-2 text-[14px]'>
          Kinh nghiệm học tập và làm việc:
        </div>
        <Flex vertical gap={6}>
          {descs?.map((desc) => (
            <Flex gap={8} key={desc}>
              {/* <ReadOutlined className='text-gray-900 text-base' /> */}
              <div className='text-[14px] text-gray-700'>{desc}</div>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TeacherItem;
