import { ViewUserComponent } from './../../../models/view-user/view-user.component';
import { MatDialog } from '@angular/material/dialog';
import { FilterUserComponent } from './../../../models/filter-user/filter-user.component';
import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  fullName: string;
  id: number;
  profileImage: string;
  email: string;
  phNo:string;
  NRCNO:string;
  address:string;
  date:string;
  isActive:boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, fullName: 'Hydrogen', phNo: "1.0079", profileImage: 'H',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
  {id: 2, fullName: 'Helium', phNo: "4.0026", profileImage: 'He',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
  {id: 3, fullName: 'Lithium', phNo: "6.941", profileImage: 'Li',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
  {id: 4, fullName: 'Beryllium', phNo: "9.0122", profileImage: 'Be',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:false},
  {id: 5, fullName: 'Boron', phNo: "10.811", profileImage: 'B',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
  {id: 6, fullName: 'Carbon', phNo: "12.0107", profileImage: 'C',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
  {id: 7, fullName: 'Nitrogen', phNo: "14.0067", profileImage: 'N',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
  {id: 8, fullName: 'Oxygen', phNo: "15.9994", profileImage: 'O',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
  {id: 9, fullName: 'Fluorine', phNo: "18.9984", profileImage: 'F',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
  {id: 10, fullName: 'Neon', phNo: "20.1797", profileImage: 'Ne',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
];

@Component({
  selector: 'app-staff-customer',
  templateUrl: './staff-customer.component.html',
  styleUrls: ['./staff-customer.component.css']
})
export class StaffCustomerComponent implements OnInit {
  constructor(private dialog:MatDialog){}
  ngOnInit(): void {

  }
  displayedColumns: string[] = ['id','profileImage', 'fullName', 'email', 'NRCNO','phNo','address','date','isActive','action'];
  dataSource = ELEMENT_DATA;

  filter(){
    this.dialog.open(FilterUserComponent,{
      width:'900px'
    })
  }

  view(){
    this.dialog.open(ViewUserComponent,{
      width:'900px'
    })
  }


}
