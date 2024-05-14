import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { OverlayComponent } from './overlay/overlay.component';
import { RootStoreModule } from '../root-store/root-store.module';
import { EffectsModule } from '@ngrx/effects';
import { NotificationCounterPipe } from '../shared/pipes/notification-counter/notification-counter.pipe';
import { NotificationsEffects } from '../root-store/notifications/notifications.effects';
import { PopUpBlockComponent } from './pop-ups/pop-up-block/pop-up-block.component';
import { PopUpItemComponent } from './pop-ups/pop-up-item/pop-up-item.component';
import { DateTransformPipe } from '../shared/pipes/date-transform/date-transform.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    OverlayComponent,
    NotificationCounterPipe,
    PopUpBlockComponent,
    PopUpItemComponent,
    DateTransformPipe,
  ],
  imports: [
    CommonModule,
    RootStoreModule,
    EffectsModule.forRoot([NotificationsEffects]),
  ],
  exports: [MainComponent],
})
export class NotificationsModule {}
