import { TestBed } from '@angular/core/testing';

import { VrLibService } from './vr-lib.service';

describe('VrLibService', () => {
  let service: VrLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VrLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
