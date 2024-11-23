import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-filter-order',
  templateUrl: './filter-order.component.html',
  styleUrls: ['./filter-order.component.css']
})
export class FilterOrderComponent implements OnInit {
  allUser:any[]=[]
  allroomNumber:any[]=[]
  constructor(private service:ApiService){}
  ngOnInit(): void {
      this.getCustomerName()
      this.getRoomNumber()
  }

  getCustomerName(){
    this.service.getData('filter/user/dropdown/customer').subscribe((res:any)=>{
      this.allUser = res;
    },error =>{
      console.log(error , 'error is')
    })
  }

  getRoomNumber(){
    this.service.getData('filter/room/dropdown/roomNumber').subscribe((res:any)=>{
      this.allroomNumber = res;
    },error =>{
      console.log(error , 'error is')
    })
  }
}
