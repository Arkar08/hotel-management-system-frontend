import { AuthguardService } from './../../../service/authguard.service';
import { ApiService } from './../../../service/api.service';
import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean = true;
  loginDetails = {
    email:'',
    password:''
  }
  email:string =''
  password:string =''
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

  login(){
    this.loginDetails = {
      email:this.email,
      password:this.password
    }
    this.service.postData("users/login",this.loginDetails).subscribe((res:any)=>{
      this.authService.login()
      this.loginData = res;
      localStorage.setItem('token',this.loginData.token)
      if(this.loginData.role === 'receptionist'){
        localStorage.setItem('role','receptionist')
        this.router.navigateByUrl('receptionist/dashboard')
      }else if(this.loginData.role === 'admin'){
        localStorage.setItem('role','admin')
        this.router.navigateByUrl('admin/dashboard')
      }else if(this.loginData.role === 'customer'){
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
