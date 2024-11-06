import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderlistingComponent } from './admin-orderlisting.component';

describe('AdminOrderlistingComponent', () => {
  let component: AdminOrderlistingComponent;
  let fixture: ComponentFixture<AdminOrderlistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrderlistingComponent]
    });
    fixture = TestBed.createComponent(AdminOrderlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
