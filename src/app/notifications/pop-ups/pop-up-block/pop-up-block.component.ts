import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  NotificationInterface,
  NotificationsStateInterface,
} from '../../../shared/models/notification.interface';
import { Store } from '@ngrx/store';
import { DeleteDisplayNotification } from '../../../root-store/notifications/notifications.actions';
import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-pop-up-block',
  templateUrl: './pop-up-block.component.html',
  styleUrls: ['./pop-up-block.component.scss'],
  animations: [
    trigger('heightAnimation', [
      transition(':enter', [
        query('.item', [
          style({ transform: 'translateY(-100%)' }),
          animate('400ms ease-in', style({ transform: 'translateY(0%)' })),
        ]),
      ]),
      transition(':leave', [
        group([
          query('.animation-height-handler', [
            animate('500ms ease-in-out', style({ height: 0 })),
          ]),
          query('.item', [
            style({
              position: 'absolute',
              right: 0,
              opacity: 1,
            }),
            animate('500ms', style({ opacity: 0, height: 0 })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class PopUpBlockComponent implements OnInit {
  public notifications$: Observable<NotificationInterface[]>;
  constructor(
    private store: Store<{ notifications: NotificationsStateInterface }>,
  ) {
    this.notifications$ = this.store.select(
      (state) => state.notifications.displayedNotifications,
    );
  }

  ngOnInit(): void {}

  deleteNotification = (id: number) =>
    this.store.dispatch(new DeleteDisplayNotification(id));

  public trackBy(index: number, item: NotificationInterface) {
    return item.id;
  }
}
