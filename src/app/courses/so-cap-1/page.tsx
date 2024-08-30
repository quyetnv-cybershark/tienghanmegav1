import BaseCourse, { BaseCourseProps } from '@/app/courses/BaseCourse';

const SoCapMot = () => {
  const ChuyenSaupageData: BaseCourseProps = {
    imgUrl: '/course-page/socap1.png',
    title: 'Sơ Cấp 1',
    output: '80/200 TOPIK I',
    overviews: [
      {
        title: 'Tổng quan khóa học',
        overviewsDescs: [
          {
            title: 'Đối tượng học:',
            desc: 'Người mới bắt đầu học tiếng Hàn.',
          },
          {
            title: 'Thời gian học:',
            desc: '35 buổi (33 buổi lý thuyết & 2 buổi thực hành với thầy Hàn Quốc)',
          },
          {
            title: 'Ca học:',
            desc: '3 buổi/tuần (Thứ 2, 4, 6 hoặc 3, 5, 7) từ 19:30 - 21:30',
          },
          {
            title: 'Giáo trình học:',
            desc: 'Giáo trình tiếng Hàn tổng hợp cuốn 1',
          },
        ],
      },
      {
        title: 'Khái quát nội dung',
        overviewsDescs: [
          {
            title: '',
            desc: 'Làm quen với bảng chữ cái tiếng Hàn',
          },
          {
            title: '',
            desc: '15 chủ đề từ vựng tiếng Hàn cơ bản',
          },
        ],
      },
    ],
  };
  return <BaseCourse {...ChuyenSaupageData} />;
};

export default SoCapMot;
