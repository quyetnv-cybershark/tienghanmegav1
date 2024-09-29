import BaseCourse, { BaseCourseProps } from '@/app/courses/BaseCourse';

const GiaoTiep = () => {
  const ChuyenSaupageData: BaseCourseProps = {
    imgUrl: '/course-page/giaotiep.svg',
    title: 'Giao Tiếp',
    output: 'Giao tiếp thành thạo các chủ đề cơ bản trong sinh hoạt',
    overviews: [
      {
        title: 'Tổng quan khóa học',
        overviewsDescs: [
          {
            title: 'Đối tượng học:',
            desc: 'Người đã hoàn thành sơ cấp 1-2 muốn nâng cao kỹ năng nghe nói.',
          },
          {
            title: 'Thời gian học:',
            desc: '90 Phút',
          },
          {
            title: 'Ca học:',
            desc: '3 buổi/tuần (khoá 20 buổi)',
          },
          {
            title: 'Giáo trình học:',
            desc: 'Nâng cao kỹ năng nghe nói tiếng Hàn',
          },
        ],
      },
      {
        title: 'Khái quát nội dung',
        overviewsDescs: [
          {
            title: '',
            desc: 'Sửa phát âm, ngữ pháp và luyện phản xạ nghe',
          },
          {
            title: '',
            desc: 'Bồi dưỡng các biểu hiện nói thông dụng trong giao tiếp',
          },
          {
            title: '',
            desc: '20 chủ đề giao tiếp cơ bản',
          },
          {
            title: '',
            desc: '600 từ vựng thông dụng trong tiếng Hàn',
          },
        ],
      },
    ],
  };
  return <BaseCourse {...ChuyenSaupageData} />;
};

export default GiaoTiep;
