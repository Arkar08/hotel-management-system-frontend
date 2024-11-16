import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  orderLists:any[]=[];
  loading : boolean = true;
  allOrders:any[]=[]
  generalAmount = {
    roomId:'',
    generalChecking:0
  }
  totalAmount = {
    tax:'',
    total:''
  }

  checking:any;

  constructor(private service:ApiService){}
  ngOnInit(): void {
      this.getOrder()
  }



  general(data:any){
      this.checking = data.target.value;
      this.generalAmount = {
        roomId:this.allOrders[0]?.roomId,
        generalChecking:this.checking
      }
      this.service.postData('staff/transactions/generalChecking',this.generalAmount).subscribe((res:any)=>{
        this.totalAmount = res;
      },error =>{
        console.log(error , 'main checking error is')
      })
  }

  getOrder(){
    this.service.getData('staff/singlepage').subscribe((res:any)=>{
      this.orderLists = res;
    },error =>{
      console.log(error , 'getOrder error is')
    })
  }

  checkOrder(event: any) {
    const order = event.target.value;
    const orderDetails = {
      orderNo:order
    }
    if (order === null || order === undefined) {
        console.error('Invalid order value');
        return;
    }
    if(order === ''){
      this.service.getData('staff/singlepage').subscribe((res:any)=>{
        this.orderLists =res;
      },error =>{
        console.log(error , 'get orderNo error is')
      })
    }else{
      this.service.postData('staff/singlepage/order', orderDetails).subscribe((res:any)=>{
        this.orderLists = res;
      },error =>{
        console.log(error,'searching orderNo error is')
      })
    }
  }
  changeOrderNo(data:any){
    this.loading = true;
    const dataList = data.value;
    console.log(dataList)
    const dataDetails = {
      orderNo:dataList
    }
    if(dataList === ''){
      return;
    }else{
      this.service.postData('staff/singlepage/orderId',dataDetails).subscribe((res:any)=>{
        this.loading = false;
        this.allOrders = res;
      },error =>{
        console.log(error , 'select orderNo error is')
      })
    }
  }
}
