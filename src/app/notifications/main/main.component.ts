import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { NotificationsStateInterface } from '../../shared/models/notification.interface';
import { Store } from '@ngrx/store';
import { AddNotification } from '../../root-store/notifications/notifications.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(
    private websocketService: NotificationsService,
    private store: Store<{
      notifications: NotificationsStateInterface;
    }>,
  ) {}

  ngOnInit(): void {
    this.websocketService.connect();
    this.websocketService.onMessage().subscribe((message) => {
      const createdMessage = {
        id: message.id,
        title: message.title,
        message: message.message,
        date: Date.now(),
      };
      this.store.dispatch(new AddNotification(createdMessage));
    });
  }
  ngOnDestroy(): void {
    this.websocketService.disconnect();
  }
}
