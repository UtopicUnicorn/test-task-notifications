import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mapTo, mergeMap, timer } from 'rxjs';
import {
  NotificationActionInterface,
  NotificationsActionTypes,
} from './notifications.actions';

@Injectable()
export class NotificationsEffects {
  @Effect()
  save$ = this.actions$.pipe(
    ofType(NotificationsActionTypes.Add),
    mergeMap((action: NotificationActionInterface) =>
      timer(5000).pipe(
        mapTo({
          type: NotificationsActionTypes.DeleteDisplay,
          payload: action.payload.id,
        }),
      ),
    ),
  );
  constructor(private actions$: Actions) {}
}
