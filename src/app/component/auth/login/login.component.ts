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

  constructor(private router:Router){}
  ngOnInit(): void {

  }

  view(){
    this.hide = !this.hide;
  }

  login(){
    console.log('hello',this.email)
    console.log('password is',this.password)
    if(this.email === 'admin@gmail.com' && this.password === 'admin'){
      localStorage.setItem('role','admin')
      this.router.navigateByUrl('admin/dashboard')
    }else if(this.email === '' && this.password === ''){
      this.statement = true;
    }else if(this.email === '' && this.password !== ''){
      this.filterEmail = true;
    }else if(this.email !== '' && this.password === ''){
      this.filterPassword = true;
    }else if (this.email !== '' && this.password !== ''){
      localStorage.setItem('role','receptionist')
      this.router.navigateByUrl('receptionist/dashboard')
    }
  }
}
