
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService  {

  constructor() { }

  loggedIn :boolean = true;

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }

  isAuthenticated(){
    return this.loggedIn;
  }

  


}
