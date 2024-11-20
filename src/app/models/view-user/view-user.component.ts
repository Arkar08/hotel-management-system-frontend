import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId:string = ''
  userList:any;
  constructor(@Inject(MAT_DIALOG_DATA) data:any, private service:ApiService){
    this.userId = data;
  }
  ngOnInit(): void {
      this.getUserId()
  }
  getUserId(){
    this.service.getData(`users/${this.userId}`).subscribe((res:any)=>{
      this.userList = res;
    },error =>console.log(error, 'error is'))
  }

}
