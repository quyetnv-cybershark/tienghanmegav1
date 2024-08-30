import BaseCourse, { BaseCourseProps } from '@/app/courses/BaseCourse';

const TrungCapHai = () => {
  const ChuyenSaupageData: BaseCourseProps = {
    imgUrl: '/course-page/trungcap3.png',
    title: 'Topik II cấp độ 3,4,5,6',
    output: 'Tối thiểu Topik 3',
    overviews: [
      {
        title: 'Tổng quan khóa học',
        overviewsDescs: [
          {
            title: 'Đối tượng học:',
            desc: 'Dành cho người muốn làm chủ cấu trúc đề thi và các mẹo làm bài hiệu quả, phát triển toàn diện các kỹ năng đọc, nghe, viết.',
          },
          {
            title: 'Thời gian học:',
            desc: '45 buổi (44 buổi lý thuyết & 1 buổi thực hành với thầy Hàn Quốc)',
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
            desc: 'Bổ sung kho từ vựng và ngữ pháp bám sát đề thi',
          },
          {
            title: '',
            desc: 'Rèn luyện các kỹ năng Nghe - Đọc - Viết',
          },
          {
            title: '',
            desc: 'Học mẹo và làm chủ các kỹ năng làm bài nhanh và hiệu quả',
          },
          {
            title: '',
            desc: 'Làm quen với cấu trúc đề và các dạng bài thường xuất hiện trong đề thi',
          },
          {
            title: '',
            desc: 'Giải mã các câu nâng cao',
          },
        ],
      },
    ],
  };
  return <BaseCourse {...ChuyenSaupageData} />;
};

export default TrungCapHai;
