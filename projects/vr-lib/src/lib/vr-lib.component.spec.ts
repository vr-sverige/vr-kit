import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrLibComponent } from './vr-lib.component';

describe('VrLibComponent', () => {
  let component: VrLibComponent;
  let fixture: ComponentFixture<VrLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VrLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
