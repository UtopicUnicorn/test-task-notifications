export interface NotificationInterface {
  id: number;
  title: string;
  message: string;
  date: number;
}

export interface NotificationsStateInterface {
  notifications: NotificationInterface[];
  displayedNotifications: NotificationInterface[];
}
