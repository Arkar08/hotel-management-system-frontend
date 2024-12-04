import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
constructor(private router:Router,private service:ApiService){}

confirmPassword:string = ''
newPassword:string = ''
postDetails = {
  password:''
}
ngOnInit(): void {
    
}
  cancel(){
    this.router.navigateByUrl('customer/profile')
  }

  changePassword(){
    const userId = localStorage.getItem('userId')
    if(this.newPassword === this.confirmPassword){
      this.postDetails = {
        password:this.confirmPassword
      }
      this.service.patchData(`users/${userId}`,this.postDetails).subscribe((res:any)=>{
        if(res){
          this.router.navigateByUrl('customer/profile')
        }
      },error =>{
        console.log(error, 'change password error is')
      })
    }else{
      throw Error('Password does not match')
    }
  }

}
