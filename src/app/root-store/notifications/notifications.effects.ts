import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concatMap, mapTo, timer } from 'rxjs';
import {
  NotificationActionInterface,
  NotificationsActionTypes,
} from './notifications.actions';

@Injectable()
export class NotificationsEffects {
  @Effect()
  save$ = this.actions$.pipe(
    ofType(NotificationsActionTypes.Add),
    concatMap((action: NotificationActionInterface) =>
      timer(5000).pipe(
        mapTo({
          type: NotificationsActionTypes.DeleteDisplay,
          payload: action.payload,
        }),
      ),
    ),
  );
  constructor(private actions$: Actions) {}
}
