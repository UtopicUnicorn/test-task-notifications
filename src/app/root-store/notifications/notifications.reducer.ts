import {
  NotificationInterface,
  NotificationsStateInterface,
} from '../../shared/models/notification.interface';
import {
  NotificationActionUnion,
  NotificationsActionTypes,
} from './notifications.actions';

export const notificationsInitialState: NotificationsStateInterface = {
  notifications: [],
  displayedNotifications: [],
};

function addDisplay(
  state: NotificationInterface[],
  item: NotificationInterface,
): NotificationInterface[] {
  let buff: NotificationInterface[] = [...state];
  if (buff.length > 3) {
    buff.unshift(item);
    buff.pop();
  } else {
    buff.unshift(item);
  }
  return buff;
}

export function notificationReducer(
  state = notificationsInitialState,
  action: NotificationActionUnion,
) {
  switch (action.type) {
    case NotificationsActionTypes.Add: {
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
        displayedNotifications: [
          ...addDisplay(state.displayedNotifications, action.payload),
        ],
      };
    }
    case NotificationsActionTypes.Delete: {
      return {
        ...state,
        notifications: state.notifications.filter(
          (item) => item.id !== action.payload,
        ),
        displayedNotifications: state.displayedNotifications.filter(
          (item) => item.id !== action.payload,
        ),
      };
    }
    case NotificationsActionTypes.DeleteDisplay: {
      return {
        ...state,
        displayedNotifications: state.displayedNotifications.filter(
          (item) => item.id !== action.payload,
        ),
        notifications: state.notifications,
      };
    }
    case NotificationsActionTypes.Archive: {
      return (state = { notifications: [], displayedNotifications: [] });
    }
    default:
      return state;
  }
}
