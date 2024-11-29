import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFooterbarComponent } from './customer-footerbar.component';

describe('CustomerFooterbarComponent', () => {
  let component: CustomerFooterbarComponent;
  let fixture: ComponentFixture<CustomerFooterbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerFooterbarComponent]
    });
    fixture = TestBed.createComponent(CustomerFooterbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
