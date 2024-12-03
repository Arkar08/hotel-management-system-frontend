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
  isActive:boolean = true;
  allUser ={
    fullName:'',
    email:'',
    password:'',
    phNo:'',
    NRCNO:'',
    state:'',
    township:''
  };
  constructor(private authService:AuthguardService,private router:Router,private service:ApiService){}
  ngOnInit(): void {
      this.getState()
      this.getTownship()
      this.getUserProfile()
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

  getUserProfile(){
    const userId = localStorage.getItem('userId')
    this.service.getData(`users/${userId}`).subscribe((res:any)=>{
      this.allUser = res;
    },error =>{
      console.log(error , 'error is')
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
      const stateCode = this.allState.filter((state)=>{
        return state.StateName === data.value;
      })
      this.choiceTownship = this.allTownship.filter((township)=>{
        return township.StateCode === stateCode[0].StateCode;
      })
    }
  }

  edit(){
    this.isActive = false;
    this.disable = false;
    const stateCode = this.allState.filter((state)=>{
      return state.StateName === this.allUser.state;
    })
    this.choiceTownship = this.allTownship.filter((township)=>{
      return township.StateCode === stateCode[0].StateCode;
    })
  }

  cancel(){
    this.isActive = true;
    const userId = localStorage.getItem('userId')
    this.service.getData(`users/${userId}`).subscribe((res:any)=>{
      this.allUser = res;
    },error =>{
      console.log(error , 'error is')
    })
  }

  save(){
    const userId = localStorage.getItem('userId')
    const stateCode = this.allState.filter((state)=>{
      return state.StateName === this.allUser.state
    })
    const state = stateCode[0].StateCode
    const townshipCode = this.allTownship.filter((township)=>{
      return township.TownshipName === this.allUser.township
    })

    const township = townshipCode[0].TownshipCode

    this.allUser = {
      fullName:this.allUser.fullName,
      email:this.allUser.email,
      password:this.allUser.password,
      phNo:this.allUser.phNo,
      NRCNO:this.allUser.NRCNO,
      state:state,
      township:township
    }
    this.service.patchData(`users/${userId}`,this.allUser).subscribe((res:any)=>{
      if(res){
        this.isActive = true;
        this.service.getData(`users/${userId}`).subscribe((res:any)=>{
          this.allUser = res
        },error =>{
          console.log(error , 'error is')
        })
      }
    },error=>{
      console.log(error  , 'patch data error is')
    })
  }
}
