import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffOrderComponent } from './staff-order.component';

describe('StaffOrderComponent', () => {
  let component: StaffOrderComponent;
  let fixture: ComponentFixture<StaffOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffOrderComponent]
    });
    fixture = TestBed.createComponent(StaffOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
