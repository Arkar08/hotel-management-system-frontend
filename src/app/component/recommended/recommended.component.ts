import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  allRecommendedList:any[]=[]
  isLoading:boolean = true;
  constructor(private service:ApiService){}
  ngOnInit(): void {
      this.getRecommendedList()
  }

  getRecommendedList(){
    this.isLoading = true
    this.service.getData('rooms').subscribe((res:any)=>{
      if(res){
        this.isLoading = false;
        this.allRecommendedList = res
      }
    },error=>{
      console.log(error, 'getRecommendedList error is')
    })
  }
}
