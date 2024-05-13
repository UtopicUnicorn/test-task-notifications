import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, MainComponent],
  imports: [CommonModule],
  exports: [MainComponent],
})
export class NotificationsModule {}
