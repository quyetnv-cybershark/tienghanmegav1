import BaseCourse, { BaseCourseProps } from '@/app/courses/BaseCourse';

const ChuyenSaupage = () => {
  const ChuyenSaupageData: BaseCourseProps = {
    imgUrl: '/course-page/chuyensau.png',
    title: 'Chuyên sâu 1-1',
    output: 'cam kết đầu ra tương tự các khóa cùng trình độ',
    overviews: [
      {
        title: 'Tổng quan khóa học',
        overviewsDescs: [
          {
            title: 'Đối tượng học:',
            desc: 'Dành cho người muốn học theo lộ trình cá nhân hóa, linh hoạt thời gian và tiết kiệm thời gian ôn luyện.',
          },
          {
            title: 'Thời gian học:',
            desc: 'Do giáo viên và học viên tự sắp xếp.',
          },
          {
            title: 'Giáo trình học:',
            desc: 'Giáo trình cá nhân hóa dựa theo mục tiêu của học viên.',
          },
        ],
      },
    ],
  };
  return <BaseCourse {...ChuyenSaupageData} />;
};

export default ChuyenSaupage;
