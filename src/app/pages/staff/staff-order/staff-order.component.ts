import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './../../../service/api.service';
import { FilterOrderComponent } from './../../../models/filter-order/filter-order.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id:number;
  orderNo:string;
  customerName:string;
  roomNumber:number;
  startDate:string;
  endDate:string;
  status:string;
  roomPrice:number;
  maxPeople:number;
  description:string;
  roomName:string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, customerName: 'Hydrogen', roomNumber: 1.0079, startDate: "1.0079", endDate: 'H',status:'Pending',roomPrice: 1000,maxPeople:3,description:'blah blah'},
//   {id: 2, customerName: 'Helium', roomNumber: 4.0026, startDate: "1.0079", endDate: 'H',status:'Pending',roomPrice: 1000,maxPeople:3,description:'blah blah'},
//   {id: 3, customerName: 'Lithium', roomNumber: 6.941, startDate: "1.0079", endDate: 'H',status:'Pending',roomPrice: 1000,maxPeople:3,description:'blah blah'},
//   {id: 4, customerName: 'Beryllium', roomNumber: 9.0122, startDate: "1.0079", endDate: 'H',status:'Pending',roomPrice: 1000,maxPeople:3,description:'blah blah'},
//   {id: 5, customerName: 'Boron', roomNumber: 10.811, startDate: "1.0079", endDate: 'H',status:'Pending',roomPrice: 1000,maxPeople:3,description:'blah blah'},
//   {id: 6, customerName: 'Carbon', roomNumber: 12.0107, startDate: "1.0079", endDate: 'H',status:'Pending',roomPrice: 1000,maxPeople:3,description:'blah blah'},
//   {id: 7, customerName: 'Nitrogen', roomNumber: 14.0067, startDate: "1.0079", endDate: 'H',status:'Pending',roomPrice: 1000,maxPeople:3,description:'blah blah'},
//   {id: 8, customerName: 'Oxygen', roomNumber: 15.9994, startDate: "1.0079", endDate: 'H',status:'Pending',roomPrice: 1000,maxPeople:3,description:'blah blah'},
//   {id: 9, customerName: 'Fluorine', roomNumber: 8.9984, startDate: "1.0079", endDate: 'H',status:'Pending',roomPrice: 1000,maxPeople:3,description:'blah blah'},
//   {id: 10, customerName: 'Neon', roomNumber: 20.1797, startDate: "1.0079", endDate: 'H',status:'Approved',roomPrice: 1000,maxPeople:3,description:'blah blah'},
// ];

@Component({
  selector: 'app-staff-order',
  templateUrl: './staff-order.component.html',
  styleUrls: ['./staff-order.component.css']
})
export class StaffOrderComponent implements OnInit {
  loading:boolean = true;
  changeDetails = {
    status:''
  }
  constructor(private dialog:MatDialog,private service:ApiService){}

  ngOnInit(): void {
    this.getOrder();
  }

  displayedColumns: string[] = ['id','orderNo','customerName','roomName', 'roomNumber','roomPrice','maxPeople','startDate','endDate','description','status','action'];
  dataSource:any;

  filter(){
    const dialogRef = this.dialog.open(FilterOrderComponent,{
      width:'900px'
    })
    dialogRef.afterClosed().subscribe((result:any)=>{
      if(result !== null && result !== undefined){
        if(result.fromDate !== ''&&result.toDate !== ''&& result.userId !== ''&&result.roomNumber!== ''&& result.paymentType !==''){
          this.service.getData(`filter/order/?fromDate=${result.fromDate}&&toDate=${result.toDate}&&userId=${result.userId}&&roomNumber=${result.roomNumber}`).subscribe((res:any)=>{
            this.generateTable(res)
          },error =>{
            console.log(error , 'filter error is')
          })
        }else if(result.fromDate !== ''&& result.toDate !== ''){
          this.service.getData(`filter/order/?fromDate=${result.fromDate}&&toDate=${result.toDate}`).subscribe((res:any)=>{
            this.generateTable(res)
          },error =>{
            console.log(error , 'error is')
          })
        }else if(result.userId !== ''){
          this.service.getData(`filter/order/?userId=${result.userId}`).subscribe((res:any)=>{
            this.generateTable(res)
          },error=>{
            console.log(error , 'error is')
          })
        }else if(result.roomNumber !== ''){
          this.service.getData(`filter/order/?roomNumber=${result.roomNumber}`).subscribe((res:any)=>{
            this.generateTable(res)
          },error =>{
            console.log(error , 'error is')
          })
        }
      }else {
        this.service.getData('staff/singlepage/pending').subscribe((res:any)=>{
          this.generateTable(res)
        },error =>{
          console.log(error , 'transaction is')
        })
      }
    })
  }

  getOrder(){
    this.loading = true;
    this.service.getData('staff/singlepage/pending').subscribe((res:any)=>{
      this.loading = false;
      this.generateTable(res)
    },error=>{
      console.log(error , 'order error is')
    })
  }

  generateTable(data:any){
    this.dataSource = new MatTableDataSource<PeriodicElement>(data)
  }

  approve(data:any){
    this.loading = true;
    this.changeDetails = {
      status:"Approve"
    }
    this.service.patchData(`staff/orders/${data}`,this.changeDetails).subscribe((res:any)=>{
        this.loading = false;
        this.service.getData('staff/singlepage/pending').subscribe((result:any)=>{
          this.generateTable(result)
        })
    },error =>{
      console.log(error , 'approve error is')
    })
  }

  reject(data:any){
    this.loading =  true;
    this.changeDetails = {
      status:"Reject"
    }
    this.service.patchData(`staff/orders/${data}`,this.changeDetails).subscribe((res:any)=>{
      this.loading = false;
      this.service.getData('staff/singlepage/pending').subscribe((result:any)=>{
        this.generateTable(result)
      })
    },error =>{
      console.log(error,'reject error is')
    })
  }

}
