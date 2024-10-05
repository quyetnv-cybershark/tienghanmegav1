import BaseCourse, { BaseCourseProps } from '@/app/courses/BaseCourse';

const TrungCapBa = () => {
  const ChuyenSaupageData: BaseCourseProps = {
    imgUrl: '/course-page/trungcap3.svg',
    title: 'Trung Cấp 3',
    output: '100/300 TOPIK II',
    overviews: [
      {
        title: 'Tổng quan khóa học',
        overviewsDescs: [
          {
            title: 'Đối tượng học:',
            desc: 'Người muốn nâng cao ngữ pháp và kỹ năng nghe nói, tăng cường vốn từ vựng và rèn luyện kỹ năng viết.',
          },
          {
            title: 'Thời gian học:',
            desc: '35 buổi (33 buổi lý thuyết & 2 buổi thực hành với thầy Hàn Quốc)',
          },
          {
            title: 'Ca học:',
            desc: '3 buổi/tuần (Thứ 2, 4, 6 hoặc 3, 5, 7)',
          },
          {
            title: 'Giáo trình học:',
            desc: 'Giáo trình tiếng Hàn tổng hợp cuốn 3',
          },
        ],
      },
      {
        title: 'Khái quát nội dung',
        overviewsDescs: [
          {
            title: '',
            desc: '15 chủ đề từ vụng tiếng Hàn nâng cao',
          },
          {
            title: '',
            desc: 'Làm chủ các kỹ năng giao tiếp hàng ngày',
          },
          {
            title: '',
            desc: 'Làm quen với đề thi TOPIK II',
          },
        ],
      },
    ],
  };
  return <BaseCourse {...ChuyenSaupageData} />;
};

export default TrungCapBa;
