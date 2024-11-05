import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTransactionComponent } from './filter-transaction.component';

describe('FilterTransactionComponent', () => {
  let component: FilterTransactionComponent;
  let fixture: ComponentFixture<FilterTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTransactionComponent]
    });
    fixture = TestBed.createComponent(FilterTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
