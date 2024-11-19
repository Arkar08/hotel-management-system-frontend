import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import {MatDialogRef } from '@angular/material/dialog'

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
    orderId:'',
    generalChecking:0
  }
  totalAmount = {
    tax:'',
    total:''
  }
  show:boolean = true;
  checking:any;
  fromDate:string = ''
  toDate:string = ''

  transactions = {
    orderId:'',
    userId:'',
    roomId:'',
    paymentType:'',
    total:'',
    tax:'',
    generalChecking:''
  }

  payment:string = '';

  constructor(private service:ApiService , public dialogRef: MatDialogRef<CreateTransactionComponent>){}
  ngOnInit(): void {
      this.getOrder()
  }



  general(data:any){
      this.checking = data.target.value;
      this.generalAmount = {
        orderId:this.allOrders[0]?._id,
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
    this.show = false;
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

  dateChange(data:any){
    this.fromDate = data;
    console.log(this.fromDate)
  }
  toDateChange(data:any){
    this.toDate = data;
    console.log(this.toDate)
  }


  save(){
    this.transactions = {
      orderId: this.allOrders[0].orderNo,
      userId: this.allOrders[0].userId,
      roomId: this.allOrders[0].roomId,
      paymentType : this.payment,
      total: this.totalAmount.total,
      tax:this.totalAmount.tax,
      generalChecking:this.checking
    }
    this.dialogRef.close(this.transactions)
  }

  cancel(){
    this.dialogRef.close()
  }
}
