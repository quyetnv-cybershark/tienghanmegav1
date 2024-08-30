import BaseCourse, { BaseCourseProps } from '@/app/courses/BaseCourse';

const SoCapHai = () => {
  const ChuyenSaupageData: BaseCourseProps = {
    imgUrl: '/course-page/socap2.png',
    title: 'Sơ Cấp 2',
    output: '140/300 TOPIK I',
    overviews: [
      {
        title: 'Tổng quan khóa học',
        overviewsDescs: [
          {
            title: 'Đối tượng học:',
            desc: 'Dành cho người đã có nền tảng tiếng Hàn cơ bản.',
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
            desc: 'Giáo trình tiếng Hàn tổng hợp cuốn 2',
          },
        ],
      },
      {
        title: 'Khái quát nội dung',
        overviewsDescs: [
          {
            title: '',
            desc: '15 chủ đề từ vụng tiếng Hàn thông dụng',
          },
          {
            title: '',
            desc: 'Phát triển phản xạ giao tiếp',
          },
          {
            title: '',
            desc: 'Làm quen với đề thi TOPIK I',
          },
        ],
      },
    ],
  };
  return <BaseCourse {...ChuyenSaupageData} />;
};

export default SoCapHai;
