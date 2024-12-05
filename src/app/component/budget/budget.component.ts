import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  allBudgetList:any[]=[]
  isLoading:boolean = true;
  constructor(private service:ApiService){}
  ngOnInit(): void {
    this.getBudgetList()
  }

  getBudgetList(){
    this.isLoading = true
    this.service.getData('rooms').subscribe((res:any)=>{
      if(res){
        this.isLoading = false;
        this.allBudgetList = res;
      }
    },error =>{
      console.log(error , 'getBudgetlist error is')
    })
  }


}
