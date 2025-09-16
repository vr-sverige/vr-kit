import { TestBed } from '@angular/core/testing';

import { VrKitService } from './vr-kit.service';

describe('VrKitService', () => {
  let service: VrKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VrKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
