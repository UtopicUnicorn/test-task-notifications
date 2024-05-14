import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpItemComponent } from './pop-up-item.component';
import { DateTransformPipe } from '../../../shared/pipes/date-transform/date-transform.pipe';

describe('PopUpItemComponent', () => {
  let component: PopUpItemComponent;
  let fixture: ComponentFixture<PopUpItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopUpItemComponent, DateTransformPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
