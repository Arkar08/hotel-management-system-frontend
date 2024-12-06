import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  allOrders:any[]=[]
  constructor(private service:ApiService){}
  ngOnInit(): void {
      this.getOrder()
  }

  getOrder(){
    this.service.getData('user/orders').subscribe((res:any)=>{
      if(res){
        this.allOrders = res;
      }
    },error =>{
      console.log(error,'error is')
    })
  }

  cancel(data:any){
    const status = 'Cancel'
    this.service.patchData(`user/orders/${data}`,status).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
