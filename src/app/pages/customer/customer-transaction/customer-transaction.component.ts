import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-customer-transaction',
  templateUrl: './customer-transaction.component.html',
  styleUrls: ['./customer-transaction.component.css']
})
export class CustomerTransactionComponent implements OnInit {
  allTransactions:any[]=[]
  constructor(private service:ApiService){}
  ngOnInit(): void {
      this.getTransactions()
  }


  getTransactions(){
    this.service.getData('user/transactions').subscribe((res:any)=>{
      if(res){
        this.allTransactions = res;
      }
    },error =>{
      console.log(error , 'error is')
    })
  }
}
