import FeedbackItem from '@/components/FeedbackItem';
import { Carousel } from 'antd';

const Feedbacks = () => {
  return (
    <div className='mt-5'>
      <div className='title uppercase text-2xl mb-6 font-semibold text-red-900 text-center w-full'>
        Cảm nhân của học viên
      </div>
      <Carousel autoplay autoplaySpeed={2000}>
        <div className='w-full !flex justify-center'>
          <div className='w-4/5 mt-8 flex gap-10'>
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
          </div>
        </div>
        <div className='w-full !flex justify-center'>
          <div className='w-5/6 mt-8 flex gap-10'>
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Feedbacks;
