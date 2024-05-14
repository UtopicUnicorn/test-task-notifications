import { Component, Input, OnInit } from '@angular/core';
import { NotificationInterface } from '../../../shared/models/notification.interface';

@Component({
  selector: 'app-pop-up-item',
  templateUrl: './pop-up-item.component.html',
  styleUrls: ['./pop-up-item.component.scss'],
})
export class PopUpItemComponent implements OnInit {
  @Input() public notification: NotificationInterface = {
    id: 0,
    message: '',
    date: 0,
    title: '',
  };

  @Input() public action: (args: number) => void = (id: number) =>
    console.log(id);

  public hidden: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
