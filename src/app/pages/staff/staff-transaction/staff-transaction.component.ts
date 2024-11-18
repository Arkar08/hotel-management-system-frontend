import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './../../../service/api.service';
import { CreateTransactionComponent } from './../../../models/create-transaction/create-transaction.component';
import { FilterTransactionComponent } from './../../../models/filter-transaction/filter-transaction.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewTransactionComponent } from './../../../models/view-transaction/view-transaction.component';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  customerName:string;
  roomNumber:number;
  paymentType:string;
  total:number;
  startDate:string;
  generalChecking:number;
  tax:number;
  roomPrice:number;
  orderNo:string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, customerName: 'Hydrogen', roomNumber: 1.0079, paymentType: 'H',total: 15100, startDate: "1.0079", endDate: 'H',roomPrice:10000,tax:100,generalChecking:5000},
//   {id: 2, customerName: 'Helium', roomNumber: 4.0026, paymentType: 'He',total: 15100, startDate: "1.0079", endDate: 'H',roomPrice:10000,tax:100,generalChecking:5000},
//   {id: 3, customerName: 'Lithium', roomNumber: 6.941, paymentType: 'Li',total: 15100, startDate: "1.0079", endDate: 'H',roomPrice:10000,tax:100,generalChecking:5000},
//   {id: 4, customerName: 'Beryllium', roomNumber: 9.0122, paymentType: 'Be',total: 15100, startDate: "1.0079", endDate: 'H',roomPrice:10000,tax:100,generalChecking:5000},
//   {id: 5, customerName: 'Boron', roomNumber: 10.811, paymentType: 'B',total: 15100, startDate: "1.0079", endDate: 'H',roomPrice:10000,tax:100,generalChecking:5000},
//   {id: 6, customerName: 'Carbon', roomNumber: 12.0107, paymentType: 'C',total: 15100, startDate: "1.0079", endDate: 'H',roomPrice:10000,tax:100,generalChecking:5000},
//   {id: 7, customerName: 'Nitrogen', roomNumber: 14.0067, paymentType: 'N',total: 15100, startDate: "1.0079", endDate: 'H',roomPrice:10000,tax:100,generalChecking:5000},
//   {id: 8, customerName: 'Oxygen', roomNumber: 15.9994, paymentType: 'O',total: 15100, startDate: "1.0079", endDate: 'H',roomPrice:10000,tax:100,generalChecking:5000},
//   {id: 9, customerName: 'Fluorine', roomNumber: 8.9984, paymentType: 'F',total: 15100, startDate: "1.0079", endDate: 'H',roomPrice:10000,tax:100,generalChecking:5000},
//   {id: 10, customerName: 'Neon', roomNumber: 20.1797, paymentType: 'Ne',total: 15100, startDate: "1.0079", endDate: 'H',roomPrice:10000,tax:100,generalChecking:5000},
// ];

@Component({
  selector: 'app-staff-transaction',
  templateUrl: './staff-transaction.component.html',
  styleUrls: ['./staff-transaction.component.css']
})
export class StaffTransactionComponent implements OnInit {
  loading:boolean = true;
  constructor(private dialog:MatDialog, private service:ApiService){}
  ngOnInit(): void {
    this.getTransaction()
  }


  displayedColumns: string[] = ['id','orderNo','customerName', 'roomNumber','roomPrice','generalChecking','tax','paymentType', 'total' ,'startDate','action'];
  dataSource:any;

  viewTransaction(data:any){
    this.dialog.open(ViewTransactionComponent,{
      width:'900px',
      data:data
    })
  }

  filter(){
    this.dialog.open(FilterTransactionComponent,{
      width:'900px'
    })
  }

  create(){
    const dialogRef = this.dialog.open(CreateTransactionComponent,{
      width:'900px'
    })
    dialogRef.afterClosed().subscribe((result:any)=>{
      if(result !== 'undefined'){
            this.service.postData('staff/transactions',result).subscribe((res:any)=>{
              this.loading = true;
                  this.service.getData('staff/transactions').subscribe((res:any)=>{
                    this.generateTable(res)
                    this.loading = false;
                  },error => {
                    console.log(error , 'transition get error is')
                  })
            },error =>{
                console.log(error , 'transaction create error is')
            })
      }
    })
  }

  getTransaction(){
    this.loading = true;
    this.service.getData('staff/transactions').subscribe((res:any)=>{
      this.loading = false;
      this.generateTable(res)
    },error=>{
      console.log(error , 'transaction error is')
    })
  }

  generateTable(data:any){
    this.dataSource = new MatTableDataSource<PeriodicElement>(data)
  }
}
