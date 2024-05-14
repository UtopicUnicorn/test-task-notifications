import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpBlockComponent } from './pop-up-block.component';
import { OverlayService } from '../../services/overlay.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('PopUpBlockComponent', () => {
  let component: PopUpBlockComponent;
  let fixture: ComponentFixture<PopUpBlockComponent>;
  let storeInitialState = [{}];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopUpBlockComponent],
      providers: [
        OverlayService,
        provideMockStore({ initialState: storeInitialState }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
