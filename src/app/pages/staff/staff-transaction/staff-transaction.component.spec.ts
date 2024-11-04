import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTransactionComponent } from './staff-transaction.component';

describe('StaffTransactionComponent', () => {
  let component: StaffTransactionComponent;
  let fixture: ComponentFixture<StaffTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffTransactionComponent]
    });
    fixture = TestBed.createComponent(StaffTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
