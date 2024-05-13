import { TestBed } from '@angular/core/testing';

import { OverlayService } from './overlay.service';

describe('OverlayService', () => {
  let service: OverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('init value to be false', () => {
    expect(service.visible).toBe(false);
  });

  it('change visibility works', () => {
    service.changeVisibility();
    expect(service.visible).toBe(true);
  });

  it('get visibility works', () => {
    expect(service.getVisibility()).toBe(service.visible);
  });
});
