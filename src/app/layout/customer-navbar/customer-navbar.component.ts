import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent implements OnInit {
  user:any;
  constructor(private service:ApiService){}
  ngOnInit(): void {
      this.getUserProfile()
  }

  getUserProfile(){
    const userId = localStorage.getItem('userId')
    this.service.getData(`users/${userId}`).subscribe((res:any)=>{
      if(res){
        this.user = res;
      }
    },error =>{
      console.log(error , 'error is')
    })
  }
}
