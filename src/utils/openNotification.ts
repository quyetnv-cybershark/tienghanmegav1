/* eslint-disable max-lines */
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps extends NotificationArgsProps {
  placement?: NotificationPlacement;
  type?: NotificationType;
}
notification.config({
  top: 60, // Thiết lập khoảng cách 60px từ trên cùng
});

export const openNotification = ({ placement = 'topRight', type = 'info', ...props }: NotificationProps) => {
  notification[type]({
    placement,
    duration: 2,
    ...props,
  });
};

export const listStudentRegisters = [
  {
    imgName: 'tranlananh.jpg',
    title: 'Trần Lan Anh',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'trananhthu.jpg',
    title: 'Trần Anh Thư',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'thanhlieu.jpg',
    title: 'Thanh Liễu',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'phamduclong.jpg',
    title: 'Phạm Đức Long',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'nguyenthithao.jpg',
    title: 'Nguyễn Thị Thảo',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'nguyenhalinh.jpg',
    title: 'Nguyễn Hà Linh',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'ngocongtuanlam.jpg',
    title: 'Ngô Công Tuấn Lâm',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'lethithuhuong.jpg',
    title: 'Lê Thị Thu Hường',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'lethiquynh.jpg',
    title: 'Lê Thị Quỳnh',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'lethaomy.jpg',
    title: 'Lê Thảo My',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'hongngoc.jpg',
    title: 'Hồng Ngọc',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'honghai.jpg',
    title: 'Hồng Hải',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'hoangtrungdung.jpg',
    title: 'Hoàng Trung Dũng',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'hoangthaovan.jpg',
    title: 'Hoàng Thảo Vân',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'haiduong.jpg',
    title: 'Hải Đường',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'dohaianh.jpg',
    title: 'Đỗ Hải Anh',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'daoanhduong.jpg',
    title: 'Đào Ánh Dương',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'caohoaiduc.jpg',
    title: 'Cao Hoài Đức',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'buimaihuong.jpg',
    title: 'Bùi Mai Hương',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'buihuyentrang.jpg',
    title: 'Bùi Huyền Trang',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'anhminh.jpg',
    title: 'Ánh Minh',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'lehatrung.jpg',
    title: 'Lê Hà Trung',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'phuongtrang.jpg',
    title: 'Phương Trang',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'nguyenhoailuong.jpg',
    title: 'Nguyễn Hoài Lương',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'linhdan.jpg',
    title: 'Linh Đan',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'nguyenminhhuong.jpg',
    title: 'Nguyễn Minh Hương',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'nguyenhuong.jpg',
    title: 'Nguyễn Hường',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'tongdangduy.jpg',
    title: 'Tống Đăng Duy',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'dothuong.jpg',
    title: 'Đỗ Thương',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'vithihang.jpg',
    title: 'Vi Thị Hằng',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'thungoc.jpg',
    title: 'Thu Ngọc',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'quachviet.jpg',
    title: 'Quách Việt',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'lethitien.jpg',
    title: 'Lê Thị Tiên',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'nguyenmyhanh.jpg',
    title: 'Nguyễn Mỹ Hạnh',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'thaony.jpg',
    title: 'Thảo Ny',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'xuancuong.jpg',
    title: 'Xuân Cường',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'caothinhung.jpg',
    title: 'Cao Thị Nhung',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'ngocgiau.jpg',
    title: 'Ngọc Giàu',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'huanpham.jpg',
    title: 'Huân Phạm',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'lethikimoanh.jpg',
    title: 'Lê Thị Kim Oanh	',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'nguyenducquan.jpg',
    title: 'Nguyễn Đức Quân',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'trinhthuylinh.jpg',
    title: 'Trịnh Thuỳ Linh',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'nganphan.jpg',
    title: 'Ngân Phan',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'thaithicamtien.jpg',
    title: 'Thái Thị Cẩm Tiên',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'baotram.jpg',
    title: 'Bảo Trâm',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'buiminhquan.jpg',
    title: 'Bùi Minh Quân',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'khanhhuyen.jpg',
    title: 'Khánh Huyền',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'nguyenthitramy.jpg',
    title: 'Nguyễn Thị Trà My',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'trinhtrongtan.jpg',
    title: 'Trịnh Trọng Tấn',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'nguyenthanhnhan.jpg',
    title: 'Nguyễn Thanh Nhàn',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'ngocthao.jpg',
    title: 'Ngọc Thảo',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'duongchibao.jpg',
    title: 'Dương Chí Bảo',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'phammai.jpg',
    title: 'Phạm Mai',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'nguyenthang.jpg',
    title: 'Nguyễn Thắng',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'vothaikhang.jpg',
    title: 'Võ Thái Khang',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'huyennguyen.jpg',
    title: 'Huyền Nguyễn',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'lynguyen.jpg',
    title: 'Ly Nguyễn',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'hoangcongthanh.jpg',
    title: 'Hoàng Công Thanh',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'trandung.jpg',
    title: 'Trần Dung',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'maingan.jpg',
    title: 'Mai Ngân',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'nguyenvantruong.jpg',
    title: 'Nguyễn Văn Trường',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'namhoang.jpg',
    title: 'Nam Hoàng',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'cuongchu.jpg',
    title: 'Cường Chu',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'linhcherry.jpg',
    title: 'Linh Cherry',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'dangngoctan.jpg',
    title: 'Đặng Ngọc Tấn',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'thanvietduy.jpg',
    title: 'Thân Viết Duy',
    desc: 'Đăng ký thành công',
  },
  {
    imgName: 'phungvanthuong.jpg',
    title: 'Phùng Văn Thưởng',
    desc: 'Đăng ký thành công',
  },
];
