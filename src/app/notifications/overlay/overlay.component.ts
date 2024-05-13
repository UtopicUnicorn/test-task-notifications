import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../services/overlay.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  constructor(private service: OverlayService) {}

  ngOnInit(): void {}

  public showVisibility() {
    return this.service.getVisibility();
  }
  public changeVisibility() {
    this.service.changeVisibility();
  }
}
