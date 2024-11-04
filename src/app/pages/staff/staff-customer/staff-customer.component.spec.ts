import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCustomerComponent } from './staff-customer.component';

describe('StaffCustomerComponent', () => {
  let component: StaffCustomerComponent;
  let fixture: ComponentFixture<StaffCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffCustomerComponent]
    });
    fixture = TestBed.createComponent(StaffCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
