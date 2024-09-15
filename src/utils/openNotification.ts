import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps extends NotificationArgsProps {
  placement?: NotificationPlacement;
  type?: NotificationType;
}

export const openNotification = ({ placement = 'topRight', type = 'info', ...props }: NotificationProps) => {
  notification[type]({
    placement,
    duration: 2,
    ...props,
  });
};
