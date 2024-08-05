import { GithubOutlined } from '@ant-design/icons';
import { Flex, Image, Rate } from 'antd';

const FeedbackItem = () => {
  return (
    <Flex vertical>
      <Flex vertical gap={2}>
        <Image
          alt=''
          src='https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/405207243_298947006452660_7587850999074369241_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFC6n5HzL0Y2O2EDrKy5rMQ0kqsQxP6pOLSSqxDE_qk4syaMImyqb_7C28bJCwQRzgrVvFY2vu4OpbA43GrvwtL&_nc_ohc=5pCg4FImOFIQ7kNvgGxLEfF&_nc_ht=scontent.fhan15-2.fna&oh=00_AYDOk2Lx-DDsmE9rHCf28_GMh8BsaUwsjBWPVdbVZs1hgw&oe=66B2E891'
          width={50}
          height={50}
          className='rounded-full object-cover'
        ></Image>
        <div className='font-extrabold text-gray-900 text-sm mt-1'>Kim Chi</div>
        <div className='font-normal text-gray-500 text-xs'>Khóa học sơ cấp</div>
      </Flex>
      <div className='font-normal text-gray-500 text-xs my-4'>
        Cảm ơn các cô giáo của chúng em đã rất nhiệt tình và tận tâm. Có những hôm em học bài tới khuya, gửi bài nhờ cô
        chữa, cô vẫn nhận ngay được câu trả lời.
      </div>
      <Flex justify='space-between'>
        <GithubOutlined className='text-3xl text-red-900' />
        <Rate allowHalf defaultValue={4.5} />
      </Flex>
    </Flex>
  );
};

export default FeedbackItem;
