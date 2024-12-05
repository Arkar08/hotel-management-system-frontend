import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  allRoom:any[]=[]
  isLoading:boolean = true;
  dataValue:string = ''
  constructor(private service:ApiService){}
  ngOnInit(): void {
      this.getRoom()
  }

  getRoom(){
    this.isLoading = true;
    this.service.getData('rooms').subscribe((res:any)=>{
      if(res){
        this.isLoading = false;
        this.allRoom = res;
      }
    },error =>{
      console.log(error , 'get room error is')
    })
  }

  inputChange(data:any){
    this.dataValue = data.target.value;
    if(this.dataValue === ''){
      this.isLoading = true;
      this.service.getData('rooms').subscribe((res:any)=>{
        if(res){
          this.isLoading = false;
          this.allRoom = res;
        }
      },error =>{
        console.log(error , 'get room error is')
      })
    }
  }

  searching(){
    if(this.dataValue !== ''){
      this.isLoading = true;
      this.service.getData(`staff/singlepage/search?q=${this.dataValue}`).subscribe((res:any)=>{
        if(res){
          this.isLoading = false;
          this.allRoom = res;
        }
      },error =>{
        console.log(error , 'searching error is')
      })
    }
  }
}
