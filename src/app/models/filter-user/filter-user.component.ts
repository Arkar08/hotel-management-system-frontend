import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-user',
  templateUrl: './filter-user.component.html',
  styleUrls: ['./filter-user.component.css']
})
export class FilterUserComponent implements OnInit {
  fromDate:string=''
  toDate:string = ''
  state:string = ''
  township:string  = ''
  isActive:boolean = false;
  constructor(){}
  ngOnInit(): void {
      
  }

  apply(){
    console.log(this.isActive)
  }
}
