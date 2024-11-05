import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRoomComponent } from './filter-room.component';

describe('FilterRoomComponent', () => {
  let component: FilterRoomComponent;
  let fixture: ComponentFixture<FilterRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterRoomComponent]
    });
    fixture = TestBed.createComponent(FilterRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
