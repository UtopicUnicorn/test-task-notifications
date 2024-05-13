import { Action } from '@ngrx/store';
import { NotificationInterface } from '../../shared/models/notification.interface';

export interface NotificationActionInterface {
  type: string;
  payload: NotificationInterface;
}

export enum NotificationsActionTypes {
  Add = '[Notification] AddNotification',
  Delete = '[Notification] DeleteNotification',
  DeleteDisplay = '[Notification] DeleteDisplayNotification',
  Archive = '[Notification] Archive',
}

export class AddNotification implements Action {
  readonly type = NotificationsActionTypes.Add;
  constructor(public payload: NotificationInterface) {}
}

export class DeleteNotification implements Action {
  readonly type = NotificationsActionTypes.Delete;
  constructor(public payload: number) {}
}

export class DeleteDisplayNotification implements Action {
  readonly type = NotificationsActionTypes.DeleteDisplay;
  constructor(public payload: number) {}
}

export class Archive implements Action {
  readonly type = NotificationsActionTypes.Archive;
}

export type NotificationActionUnion =
  | AddNotification
  | DeleteNotification
  | DeleteDisplayNotification
  | Archive;
