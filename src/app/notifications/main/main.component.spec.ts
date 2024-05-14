import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { NotificationsService } from '../services/notifications.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let service: NotificationsService;
  let storeInitialState = [{}];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [
        NotificationsService,
        provideMockStore({ initialState: storeInitialState }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
