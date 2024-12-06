import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  getDetails:any;
  postDetials = {
    roomId:'',
    fromDate:'',
    toDate:''
  };

  startDate:string = ''
  endDate:string = ''
  constructor(private router:Router,private dataService:DataService,private service:ApiService){}
  ngOnInit(): void {
    this.getData()
  }

  getData(){
    const getValue = this.dataService.getData()
    if(getValue.length !== 0){
      return this.getDetails = getValue[0]
    }else{
      return this.getDetails = ''
    }
  }

  dateChange(data:any,text:string){
    if(text === 'fromDate'){
      this.startDate  = data;
    }else{
      this.endDate = data;
    }
  }
  booking(){
    this.postDetials = {
      roomId:this.getDetails.toString(),
      fromDate:this.startDate,
      toDate:this.endDate
    }

    this.service.postData('user/orders',this.postDetials).subscribe((res:any)=>{
      if(res){
        this.router.navigateByUrl('customer/order')
        this.postDetials = {
          roomId:'',
          fromDate:'',
          toDate:''
        }
      }
    },error =>{
      console.log(error , 'error is')
    })
    
  }
}
