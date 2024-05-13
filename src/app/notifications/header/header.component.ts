import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../services/overlay.service';
import { Observable } from 'rxjs';
import {
  NotificationInterface,
  NotificationsStateInterface,
} from '../../shared/models/notification.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public notifications$: Observable<NotificationInterface[]>;

  constructor(
    private service: OverlayService,
    private store: Store<{ notifications: NotificationsStateInterface }>,
  ) {
    this.notifications$ = this.store.select(
      (state) => state.notifications.displayedNotifications,
    );
  }

  ngOnInit(): void {}

  public changeVisibility() {
    this.service.changeVisibility();
  }
}
