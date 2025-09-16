import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrKitComponent } from './vr-kit.component';

describe('VrKitComponent', () => {
  let component: VrKitComponent;
  let fixture: ComponentFixture<VrKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VrKitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
