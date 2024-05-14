import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { apiUrl } from '../../shared/constants/api';

interface MessageInterface {
  id: number;
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  public socket$!: WebSocketSubject<any>;

  constructor() {}

  connect() {
    this.socket$ = webSocket(apiUrl);
  }

  disconnect() {
    this.socket$.complete();
  }

  isConnected(): boolean {
    return this.socket$ === null ? false : !this.socket$.closed;
  }

  onMessage(): Observable<MessageInterface> {
    return this.socket$!.asObservable().pipe(map((message) => message));
  }
}
