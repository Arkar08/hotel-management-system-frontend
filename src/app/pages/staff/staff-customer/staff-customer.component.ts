import { ApiService } from './../../../service/api.service';
import { ViewUserComponent } from './../../../models/view-user/view-user.component';
import { MatDialog } from '@angular/material/dialog';
import { FilterUserComponent } from './../../../models/filter-user/filter-user.component';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'


export interface PeriodicElement {
  fullName: string;
  id: number;
  profileImage: string;
  email: string;
  phNo:string;
  NRCNO:string;
  state:string;
  township:string;
  date:string;
  role:string;
}


@Component({
  selector: 'app-staff-customer',
  templateUrl: './staff-customer.component.html',
  styleUrls: ['./staff-customer.component.css']
})
export class StaffCustomerComponent implements OnInit {

  allUsers:any[]=[];
  loading:boolean = true;
  constructor(private dialog:MatDialog,private service:ApiService){}
  ngOnInit(): void {
    this.getUser()
  }
  displayedColumns: string[] = ['id','profileImage', 'fullName', 'email', 'NRCNO','phNo','state','township','date','role','action'];
  dataSource :any;

  filter(){
    this.dialog.open(FilterUserComponent,{
      width:'900px'
    })
  }

  view(data:any){
    this.dialog.open(ViewUserComponent,{
      width:'900px',
      data:data
    })
  }

  getUser(){
    this.loading = true;
    this.service.getData('staff/singlepage/staff').subscribe((res:any)=>{
      this.loading = false;
      console.log(res)
      this.allUsers = res;
      this.generateTable(this.allUsers)
    },error  =>{
      console.log(error , 'user error is')
    })
  }


  generateTable(data:any){
    this.dataSource = new MatTableDataSource<PeriodicElement>(data)
  }


}
