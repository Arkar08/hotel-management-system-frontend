import { AuthguardService } from './../../service/authguard.service';
import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private router:Router,private service:ApiService,private authService:AuthguardService){}
  ngOnInit(): void {
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

}
