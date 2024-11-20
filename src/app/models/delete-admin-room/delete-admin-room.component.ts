import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-admin-room',
  templateUrl: './delete-admin-room.component.html',
  styleUrls: ['./delete-admin-room.component.css']
})
export class DeleteAdminRoomComponent implements OnInit {
  roomId:string = ''
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef:MatDialogRef<DeleteAdminRoomComponent> ){
    this.roomId = data
  }
  ngOnInit(): void {
    
  }
  save(){
    this.dialogRef.close(this.roomId)
  }
  cancel(){
    this.dialogRef.close(null)
  }
}
