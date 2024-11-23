import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-filter-transaction',
  templateUrl: './filter-transaction.component.html',
  styleUrls: ['./filter-transaction.component.css']
})
export class FilterTransactionComponent implements OnInit {
  alluser:any[]=[]
  allroomNumber:any[]=[]
  constructor(private service:ApiService){}
  ngOnInit(): void {
      this.getUser()
      this.getRoomNumber()
  }

  getUser(){
    this.service.getData('filter/user/dropdown/customer').subscribe((res:any)=>{
      this.alluser = res;
    },error =>{
      console.log(error, 'get user error is')
    })
  }

  getRoomNumber(){
    this.service.getData('filter/room/dropdown/roomNumber').subscribe((res:any)=>{
      this.allroomNumber = res;
    },error =>{
      console.log(error , 'get roomNumber error is')
    })
  }
}
