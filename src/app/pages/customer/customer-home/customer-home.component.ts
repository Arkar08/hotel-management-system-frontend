import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  recommendLists:any[]=[]
  popularList:any[]=[]
  budgetList:any[]=[]
  isloading:boolean = true;
  constructor(private service:ApiService){}
  ngOnInit(): void {
      this.getRecommended()
      this.getPopular()
      this.getBudget()
  }

  getRecommended(){
    this.isloading = true;
    this.service.getData('staff/singlepage/recommeded').subscribe((res:any)=>{
      if(res){
        this.isloading = false;
        this.recommendLists = res;
      }
    },error=>{
      console.log(error , 'getRecommended error is')
    })
  }

  getPopular(){
    this.isloading = true;
    this.service.getData('staff/singlepage/popular').subscribe((res:any)=>{
      if(res){
        this.isloading = false;
        this.popularList = res;
      }
    },error=>{
      console.log(error , 'getRecommended error is')
    })
  }

  getBudget(){
    this.isloading = true;
    this.service.getData('staff/singlepage/budget').subscribe((res:any)=>{
      if(res){
        this.isloading = false;
        this.budgetList = res;
      }
    },error=>{
      console.log(error , 'getRecommended error is')
    })
  }
}
