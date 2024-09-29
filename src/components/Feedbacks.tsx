import FeedbackItem, { FeedbackItemProps } from '@/components/FeedbackItem';
import HomeTitle from '@/components/HomeTitle';
import { Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Feedbacks = () => {
  const listFeedbacks: FeedbackItemProps[] = [
    {
      studentName: 'Nguyễn Văn Quyết',
      studentImg: '/feedback/NGUYỄN VĂN QUYẾT.jpg',
      course: 'Khóa Sơ Cấp 1',
      feedback:
        'Mình học lớp Sơ Cấp 1 online của thầy Minh Vũ, thầy chỉ dạy rất nhiệt tình. Mỗi buổi học thầy sửa phát âm cho chúng mình rất kỹ. 2 buổi học với thầy Hong Sik rất vui, thầy nói chuyện rất cute và nói tiếng Việt cũng đỉnh.',
    },
    {
      studentName: 'Vũ Hồng Nhung',
      studentImg: '/feedback/VŨ HỒNG NHUNG.jpg',
      course: 'Khóa Sơ Cấp 2',
      feedback:
        'Lớp học tối đa 10 bạn nên giáo viên take care khá kỹ, bài tập về nhà sát với nội dung học trên lớp. Thầy Hàn siêu vui tính.',
    },
    {
      studentName: 'Dương Tuấn Kiệt',
      studentImg: '/feedback/DƯƠNG TUẤN KIỆT.jpg',
      course: 'Khóa Trung Cấp 3',
      feedback:
        'Lớp sôi động, cô giáo hay tạo tình huống để có thể giao tiếp nhiều nhất có thể. Hài lòng nhất là khi có lịch cần nghỉ đột xuất vẫn được chị giáo vụ hỗ trợ học bù vào buổi khác.',
    },
    {
      studentName: 'Hoàng Cẩm Tú',
      studentImg: '/feedback/HOÀNG CẨM TÚ.jpg',
      course: 'Khóa Trung Cấp 4',
      feedback:
        'Đây là lần thứ 2 mình đăng ký khóa tc4, nhưng lần này thấy hiệu quả hơn vì cô Huyền dạy rất từ tốn. Trước khi học có bài minitest nên cô cũng nắm được trình độ để điều chỉnh tốc độ bài học cho phù hợp. Cám ơn cô Huyền rất nhiều ạ.',
    },
    {
      studentName: 'Trần Tiến Đạt',
      studentImg: '/feedback/Trần Tiến Đạt.jpg',
      course: 'Khóa TOPIK II',
      feedback:
        'Mình rất thích môi trường học tập ở đây, thoải mái và hiện đại. Thật sự khóa TOPIK này rất khó nhưng may mắn là cô Hương rất nhiệt tình, luôn động viên mình trong suốt quá trình học. Những mẹo và tips cô đưa ra cũng rất hữu ích.',
    },
    {
      studentName: 'Đinh Thu Hương',
      studentImg: '/feedback/Đinh Thu Hương.jpg',
      course: 'Khóa Sơ Cấp 1',
      feedback:
        'Mình từng nghĩ học tiếng Hàn sẽ rất khó, nhưng nhờ các thầy cô tận tâm mà mọi thứ trở nên dễ dàng hơn nhiều. Cô giáo nhiều năng lượng và vui vẻ, còn thầy Hàn thì đẹp trai lắmmm. Mình thật sự rất biết ơn sự giúp đỡ của thầy cô.',
    },
    {
      studentName: 'Nga Nguyễn',
      studentImg: '/feedback/Nga Nguyễn.jpg',
      course: 'Khóa Sơ Cấp 2',
      feedback:
        'Cảm ơn cô Vân và thầy Hong Sik rất nhiều. 2 thầy cô siêu tâm lý và nhiệt tình. Học cô Vân cảm giác như kiểu mình ôn bài với bạn bè vậy, vừa thoải mái vừa hiệu quả. Còn thầy Hong Sik thì 10đ, vừa sửa phát âm cho mình, vừa chia sẻ về sở thích và những điều thú vị ở Hàn Quốc. Rất mong khóa Trung Cấp 3 được gặp lại 2 thầy cô ạ.',
    },
    {
      studentName: 'Tuấn Anh',
      studentImg: '/feedback/Tuần Anh.jpg',
      course: 'Khóa Trung Cấp 3',
      feedback:
        'Mình đã học ở nhiều trung tâm tiếng Hàn khác nhau, nhưng đây là nơi mình thấy ok nhất. Giáo viên rất nhiệt tình, phương pháp giảng dạy dễ hiểu, lớp học lúc nào cũng vui và không bị căng thẳng. Lớp học cũng không quá đông nên giáo viên rất quan tâm và cũng được tương tác nhiều.',
    },
    {
      studentName: 'Vương Hồng Yến',
      studentImg: '/feedback/Vương Hồng Yến.jpg',
      course: 'Khóa Trung Cấp 4',
      feedback:
        'Lộ trình học rất phù hợp với lực học của mình, tỉ lệ thời gian học lý thuyết và thực hành rất đồng đều nên mình thấy các kỹ năng được phát triển toàn diện. Cám ơn các thầy cô và các anh chị giáo vụ đã hỗ trợ mình rất nhiều.',
    },
    {
      studentName: 'Phạm Khánh Linh',
      studentImg: '/feedback/Phạm Khánh Linh.jpg',
      course: 'Khóa TOPIK II',
      feedback:
        'Đây là lần thứ 2 mình ôn khóa này tại MEGA, lần trước mình được 208 điểm TOPIK 5 nên quyết tâm lấy TOPIK 6. Cả 2 lần mình đều học lớp cô Huyền, mình rất quý cô vì cô rất tận tâm và hỗ trợ chúng mình rất nhiều trong quá trình học và ôn đề. Các bạn trong lớp cũng rất cố gắng và chăm chỉ. Cám ơn trung tâm và cô Huyền nhiều ạ.',
    },
    {
      studentName: 'Phan Hoàng Thảo Phương',
      studentImg: '/feedback/PHAN HOÀNG THẢO PHƯƠNG.jpg',
      course: 'Chuyên sâu 1:1',
      feedback:
        'Mình chọn khóa này để linh hoạt thời gian và học theo mục tiêu mình đề ra là TOPIK 5. Cô Hằng dạy mình rất teen, siêu vui tính, nhiều khi tưởng như 2 chị em đang học. ',
    },
    {
      studentName: 'Lê Mai Anh',
      studentImg: '/feedback/LÊ MAI ANH.jpg',
      course: 'Sơ cấp 1',
      feedback:
        'Đáng đồng tiền bát gạo lắm quý zị ạ. Mình lần đầu học cứ sợ không theo được. Mà các thầy cô dạy siêu tận tình, siêu cẩn thận lun. Lần đầu học thầy Hàn cũng sợ không nói được nhưng vẫn có cô giáo làm phiên dịch giùm thích mê, thầy nói tiếng Việt nghe đáng yêu lắm ạ. Hẹn gặp cô và thầy Hong Sik ở lớp Sơ Cấp 2 ạ.',
    },
    {
      studentName: 'Đỗ Duyên',
      studentImg: '/feedback/ĐỖ DUYÊN.jpg',
      course: 'Sơ Cấp 2',
      feedback:
        'Mình đăng ký học vì trung tâm có các buổi thực hành với giáo viên người Hàn. Thầy rất vui tính, hoạt ngôn, cảm giác rất gần gũi và hòa đồng. Kiến thức trên lớp mình được thầy Vũ chỉ dạy rất cẩn thận và kỹ. Thầy khi giảng dạy nhìn nghiêm khắc chứ cũng vui tính lắm.',
    },
    {
      studentName: 'Long Nhật',
      studentImg: '/feedback/LONG NHẬT.jpg',
      course: 'Trung Cấp 3',
      feedback:
        'Trung tâm làm việc chuyên nghiệp, các bạn giáo vụ phản hồi nhanh. Thầy cô giáo vui vẻ, tương tác liên tục với học viên. Cô giáo rất hay hỏi han quá trình làm bài tập về nhà của mình và giúp mình rất nhiều. Mình hỏi bài muộn cô vẫn giải đáp như thường. Phát âm mình được thầy Hàn sửa cho nên cảm giác nói cũng tự tin hơn rất nhiều. Khi hoàn thành bài thi TOPIK mình sẽ đăng ký học tiếp.',
    },
    {
      studentName: 'Minh Hiếu',
      studentImg: '/feedback/MINH HIẾU.jpg',
      course: 'Trung Cấp 4',
      feedback:
        'Giáo trình rất thực tế và bám sát nội dung ôn luyện mà mình cần, không bị tràng màng dông dài. Các kiến thức quan trọng và mẹo cho bài thi TOPIK mình cũng được các thầy Hải chia sẻ rất kỹ. Bộ tài liệu rất cần thiết và hiệu quả, mình đỡ phải tìm đề trên mạng.',
    },
    {
      studentName: 'Ngân Hà',
      studentImg: '/feedback/NGÂN HÀ.jpg',
      course: 'TOPIK II',
      feedback:
        'Mình học được rất nhiều kinh nghiệm đi thi TOPIK từ cô Huyền. Lộ trình ôn luyện cô đưa ra cho lớp mình rất logic và dễ hiểu. Cô rất vui vẻ và nhiều năng lượng nên môi trường học rất thoải mái, không hề áp lực và giúp mình tiếp thu kiến thức một cách rất tự nhiên',
    },
    {
      studentName: 'Linh Châu ',
      studentImg: '/feedback/LINH CHÂU.jpg',
      course: 'Chuyên Sâu 1:1',
      feedback:
        'Học 1:1 thật sự rất hiệu quả với mình, mình đặt mục tiêu TOPIK 6 trong 1 năm rưỡi và được cô Hương đưa ra lộ trình học và ôn luyện theo năng lực. Cô rất thoải mái và nhiệt huyết, cô sẵn sàng dạy thêm buổi trong tuần nếu mình sắp xếp được thời gian. Qua hơn 1 năm mình rất chờ đợi cho kỳ thi TOPIK sắp tới.',
    },
    {
      studentName: 'Lâm Thảo',
      studentImg: '/feedback/Lâm Thảo.jpg',
      course: 'Trung Cấp 3',
      feedback:
        'Mình học được rất nhiều kinh nghiệm đi thi TOPIK từ cô Huyền. Lộ trình ôn luyện cô đưa ra cho lớp mình rất logic và dễ hiểu. Cô rất vui vẻ và nhiều năng lượng nên môi trường học rất thoải mái, không hề áp lực và giúp mình tiếp thu kiến thức một cách rất tự nhiên',
    },
    {
      studentName: 'Dương Nguyễn Linh Đan',
      studentImg: '/feedback/Dương Nguyễn Linh Đan.jpg',
      course: 'Sơ Cấp 2',
      feedback:
        'Mình học sơ cấp 1 ở trung tâm khác nhưng quyết định học SC2 ở đây vì muốn thực hành với thầy Hàn. Thật sự trung tâm rất khác biệt, lớp 10 người nên mình được cô quan tâm và sửa các kỹ năng cho mình rất nhiều. Thầy Hàn thì không có gì để chê, bọn mình hỏi thầy còn cho cả KaKao Talk nữa chứ. Rất hài lòng ạ.',
    },
    {
      studentName: 'Vũ Văn Huân',
      studentImg: '/feedback/VŨ VĂN HUÂN.jpg',
      course: 'Sơ Cấp 1',
      feedback:
        'Ấn tượng nhất với mình là sự nhiệt tình và tận tâm của cô giáo với cả lớp. Kiến thức mình thấy dễ hiểu và ngắn gọn, bài tập cũng bám rất sát nội dung bài học trên lớp. Các buổi thực hành cô cũng ở lại để hỗ trợ bọn mình để không bị ngộp khi giao tiếp với thầy nước ngoài. Cám ơn cô và trung tâm nhiều ạ.',
    },
  ];
  return (
    <div className='feedbacks-page'>
      <HomeTitle text='Cảm nhận của học viên' />
      <div className='relative'>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          loop={true}
          autoplay={false}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 50,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className='feedbacks-swiper'
        >
          {listFeedbacks
            .toSorted(() => Math.random() - 0.5)
            .map((feedbackItem) => (
              <SwiperSlide key={feedbackItem.studentName}>
                <FeedbackItem {...feedbackItem} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedbacks;
