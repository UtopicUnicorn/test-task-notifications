import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayComponent } from './overlay.component';
import { OverlayService } from '../services/overlay.service';
import { By } from '@angular/platform-browser';

describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;
  let service: OverlayService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverlayComponent],
      providers: [OverlayService],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('overlay should close on background press', () => {
    service.changeVisibility();
    const view = fixture.debugElement.query(By.css('.overlay'));
    view.triggerEventHandler('click', null);
    expect(service.getVisibility()).toBe(false);
  });

  it('overlay should NOT close on content press', () => {
    service.changeVisibility();
    const view = fixture.debugElement.query(By.css('.overlay__content'));
    view.triggerEventHandler('click', null);
    expect(service.getVisibility()).toBe(true);
  });
});
