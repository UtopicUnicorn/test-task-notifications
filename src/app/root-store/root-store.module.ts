import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { notificationReducer } from './notifications/notifications.reducer';
import { NotificationsStateInterface } from '../shared/models/notification.interface';

export interface State {
  notifications: NotificationsStateInterface;
}

const reducers: ActionReducerMap<State, any> = {
  notifications: notificationReducer,
};

@NgModule({
  imports: [StoreModule.forRoot(reducers)],
})
export class RootStoreModule {}
