import { AuthguardService } from './../../service/authguard.service';
import { ApiService } from './../../service/api.service';
import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide:boolean = true;
  loginDetails = {
    email:'',
    password:'',
    fullName:'',
    gender:''
  }
  email:string =''
  password:string =''
  fullName:string = ''
  gender:string = ''
  statement:boolean = false;
  filterEmail:boolean = false;
  filterPassword:boolean = false;

  loginData: any;


  constructor(private router:Router,private service:ApiService,private authService:AuthguardService){}
  ngOnInit(): void {
    history.pushState(null,'')
  }

  view(){
    this.hide = !this.hide;
  }

  changeGender(data:any){
    this.gender = data.value;
  }

  signup(){
    this.loginDetails = {
      email:this.email,
      password:this.password,
      fullName:this.fullName,
      gender:this.gender
    }
    console.log(this.loginDetails)
    this.service.postData("users/signup",this.loginDetails).subscribe((res:any)=>{
      this.authService.login()
      this.loginData = res;
      localStorage.setItem('token',this.loginData.token)
      if(this.loginData.role === 'customer'){
        localStorage.setItem('role','customer')
        localStorage.setItem('userId',this.loginData._id)
        this.router.navigateByUrl('customer/home')
      }
    },error=>{
      if(error){
        this.statement = true;
      }
    })
  
  }
}
