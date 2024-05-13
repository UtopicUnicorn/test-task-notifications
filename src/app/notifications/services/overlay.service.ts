import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  public visible = false;
  constructor() {}

  public changeVisibility() {
    this.visible = !this.visible;
  }

  public getVisibility() {
    return this.visible;
  }
}
