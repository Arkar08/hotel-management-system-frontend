import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdminRoomComponent } from './delete-admin-room.component';

describe('DeleteAdminRoomComponent', () => {
  let component: DeleteAdminRoomComponent;
  let fixture: ComponentFixture<DeleteAdminRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAdminRoomComponent]
    });
    fixture = TestBed.createComponent(DeleteAdminRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
