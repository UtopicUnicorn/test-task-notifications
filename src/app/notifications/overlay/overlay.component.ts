import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../services/overlay.service';
import { Store } from '@ngrx/store';
import {
  NotificationInterface,
  NotificationsStateInterface,
} from '../../shared/models/notification.interface';
import { Observable } from 'rxjs';
import {
  Archive,
  DeleteNotification,
} from '../../root-store/notifications/notifications.actions';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  animations: [
    trigger('notificationAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate(
          '500ms ease-in-out',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(
          '500ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(-100%)' }),
        ),
      ]),
    ]),
  ],
})
export class OverlayComponent implements OnInit {
  public notifications$: Observable<NotificationInterface[]>;
  constructor(
    private service: OverlayService,
    private store: Store<{ notifications: NotificationsStateInterface }>,
  ) {
    this.notifications$ = this.store.select(
      (state) => state.notifications.notifications,
    );
  }

  ngOnInit(): void {}

  public showVisibility() {
    return this.service.getVisibility();
  }

  public changeVisibility() {
    this.service.changeVisibility();
  }

  public archive() {
    this.store.dispatch(new Archive());
  }

  deleteNotification = (id: number) => {
    this.store.dispatch(new DeleteNotification(id));
  };

  public trackBy(index: number, item: NotificationInterface) {
    return item.id;
  }
}
