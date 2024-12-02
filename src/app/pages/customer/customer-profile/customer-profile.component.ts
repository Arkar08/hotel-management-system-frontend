import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AuthguardService } from 'src/app/service/authguard.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  allState:any[]=[]
  allTownship:any[]=[]
  disable:boolean = true;
  choiceTownship:any[]=[]
  constructor(private authService:AuthguardService,private router:Router,private service:ApiService){}
  ngOnInit(): void {
      this.getState()
      this.getTownship()
  }
  logout(){
    const role = localStorage.getItem('role')
    this.service.postData('users/logout',role).subscribe((res:any)=>{
        localStorage.removeItem('role');
        localStorage.removeItem('token')
        this.authService.logout()
        this.router.navigate(['/auth/login'])
    },error =>{
      console.log(error,'error is')
    })
  }

  getState(){
    this.service.getData('staff/singlepage/state').subscribe((res:any)=>{
      this.allState = res;
    },error =>{
      console.log(error , 'get state error is')
    })
  }

  getTownship(){
    this.service.getData('staff/singlepage/township').subscribe((res:any)=>{
      this.allTownship = res;
    },error =>{
      console.log(error , 'getTownshiperror is')
    })
  }

  stateChange(data:any){
    if(data.value !== ''){
      this.disable = false;
      this.choiceTownship = this.allTownship.filter((township)=>{
        return township.StateCode === data.value;
      })
    }
  }
}
