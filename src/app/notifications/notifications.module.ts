import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { OverlayComponent } from './overlay/overlay.component';
import { RootStoreModule } from '../root-store/root-store.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [HeaderComponent, MainComponent, OverlayComponent],
  imports: [
    CommonModule,
    RootStoreModule,
    EffectsModule.forRoot([NotificationsModule]),
  ],
  exports: [MainComponent],
})
export class NotificationsModule {}
