import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../services/overlay.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private service: OverlayService) {}

  ngOnInit(): void {}

  public changeVisibility() {
    this.service.changeVisibility();
  }
}
