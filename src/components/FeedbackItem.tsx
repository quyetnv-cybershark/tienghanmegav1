import { Flex, Image, Rate, Tooltip } from 'antd';

export interface FeedbackItemProps {
  studentName: string;
  course: string;
  feedback: string;
  studentImg: string;
}

const FeedbackItem = ({ studentName, course, feedback, studentImg }: FeedbackItemProps) => {
  return (
    <Flex vertical gap={8}>
      <Flex vertical gap={4}>
        <Image alt='' src={studentImg} width={50} height={50} className='rounded-full object-cover'></Image>
        <div className='font-extrabold text-gray-900 text-sm'>{studentName}</div>
        <div className='font-normal text-gray-500 text-xs'>{course}</div>
      </Flex>
      <Tooltip title={feedback}>
        <div className='font-normal text-gray-500 text-xs line-clamp-3 h-[3.6rem] leading-[1.2rem]'>{feedback}</div>
      </Tooltip>
      <Flex justify='space-between'>
        <Rate allowHalf defaultValue={5} disabled />
      </Flex>
    </Flex>
  );
};

export default FeedbackItem;
