import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  roomId:string = '';
  roomDetails :any;
  loading:boolean = true;
  updateDetails:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private service:ApiService , private dialogRef:MatDialogRef<EditRoomComponent>){
    this.roomId = data;
  }
  ngOnInit(): void {
      this.getData()
  }

  getData(){
    this.loading = true;
    this.service.getData(`rooms/${this.roomId}`).subscribe((res:any)=>{
      this.roomDetails = res;
      this.loading = false;
    },error=>{
      console.log(error , 'get data error is')
    })
  }

  update(){
    this.updateDetails = {
      roomNumbers:this.roomDetails.roomNumbers,
      maxPeople:this.roomDetails.maxPeople,
      price:this.roomDetails.price
    }
    this.dialogRef.close(this.updateDetails)
  }
  cancel(){
    this.dialogRef.close(null)
  }
}
