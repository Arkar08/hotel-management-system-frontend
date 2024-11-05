import { ViewTransactionComponent } from './../../../models/view-transaction/view-transaction.component';
import { FilterTransactionComponent } from './../../../models/filter-transaction/filter-transaction.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  customerName:string;
  roomNumber:number;
  paymentType:string;
  total:number;
  startDate:string;
  endDate:string;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, customerName: 'Hydrogen', roomNumber: 1.0079, paymentType: 'H',total: 1000, startDate: "1.0079", endDate: 'H',status:'Pending'},
  {id: 2, customerName: 'Helium', roomNumber: 4.0026, paymentType: 'He',total: 1000, startDate: "1.0079", endDate: 'H',status:'Pending'},
  {id: 3, customerName: 'Lithium', roomNumber: 6.941, paymentType: 'Li',total: 1000, startDate: "1.0079", endDate: 'H',status:'Pending'},
  {id: 4, customerName: 'Beryllium', roomNumber: 9.0122, paymentType: 'Be',total: 1000, startDate: "1.0079", endDate: 'H',status:'Pending'},
  {id: 5, customerName: 'Boron', roomNumber: 10.811, paymentType: 'B',total: 1000, startDate: "1.0079", endDate: 'H',status:'Pending'},
  {id: 6, customerName: 'Carbon', roomNumber: 12.0107, paymentType: 'C',total: 1000, startDate: "1.0079", endDate: 'H',status:'Pending'},
  {id: 7, customerName: 'Nitrogen', roomNumber: 14.0067, paymentType: 'N',total: 1000, startDate: "1.0079", endDate: 'H',status:'Pending'},
  {id: 8, customerName: 'Oxygen', roomNumber: 15.9994, paymentType: 'O',total: 1000, startDate: "1.0079", endDate: 'H',status:'Pending'},
  {id: 9, customerName: 'Fluorine', roomNumber: 8.9984, paymentType: 'F',total: 1000, startDate: "1.0079", endDate: 'H',status:'Pending'},
  {id: 10, customerName: 'Neon', roomNumber: 20.1797, paymentType: 'Ne',total: 1000, startDate: "1.0079", endDate: 'H',status:'Pending'},
];

@Component({
  selector: 'app-admin-transaction',
  templateUrl: './admin-transaction.component.html',
  styleUrls: ['./admin-transaction.component.css']
})
export class AdminTransactionComponent implements OnInit {
  constructor(private dialog:MatDialog){}
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id','customerName', 'roomNumber', 'total','paymentType' ,'startDate','endDate','status','action'];
  dataSource = ELEMENT_DATA;

  filter(){
    this.dialog.open(FilterTransactionComponent,{
      width:'900px'
    })
  }
  
  viewTransaction(){
    this.dialog.open(ViewTransactionComponent,{
      width:'900px'
    })
  }
}
