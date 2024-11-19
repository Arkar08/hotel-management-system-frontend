import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

export interface PeriodicElement {
  id: number;
  customerName:string;
  roomNumber:number;
  startDate:string;
  endDate:string;
  status:string;
  roomPrice:number;
  maxPeople:number;
  description:string;
}



@Component({
  selector: 'app-admin-orderlisting',
  templateUrl: './admin-orderlisting.component.html',
  styleUrls: ['./admin-orderlisting.component.css']
})
export class AdminOrderlistingComponent implements OnInit {
  approveDetails:any;
  rejectDetails:any;
  paidDetails:any;
  allDetails:any;
  loading:boolean = true;
  constructor(private service:ApiService){}
  ngOnInit(): void {
      this.getApprove()
      this.getReject()
      this.getPaid()
      this.getAllData()
  }
  displayedColumns: string[] = ['id','customerName', 'roomNumber','maxPeople','startDate','endDate','roomPrice','description','status'];
  dataSource:any;

  getApprove(){
      this.loading = true;
      this.service.getData('staff/singlepage/approve').subscribe((res:any)=>{
        this.loading = false;
        this.generateTable(res,'approve')
      },error=>{
        console.log(error , 'approve error is')
  })
  }

  getReject(){
    this.loading = true;
    this.service.getData('staff/singlepage/reject').subscribe((res:any)=>{
      this.loading =false;
      this.generateTable(res,'reject')
    },error =>{
      console.log(error , 'reject error is')
    })
  }

  getPaid(){
    this.loading = true;
    this.service.getData('staff/singlepage/paid').subscribe((res:any)=>{
      this.loading = false;
      this.generateTable(res,'paid')
    },error =>{
      console.log(error , 'paid error is')
    })
  }

  getAllData(){
    this.loading = true;
    this.service.getData('staff/orders').subscribe((res:any)=>{
      this.loading = false;
      this.generateTable(res,'all')
    },error =>{
      console.log(error , 'all data error is')
    })
  }
  generateTable(data:any,status:string){
    if(status === 'all'){
      this.dataSource = data
    }else if(status === 'approve'){
      this.approveDetails = data
    }else if(status === 'reject'){
      this.rejectDetails = data
    }else if(status === 'paid'){
      this.paidDetails = data
    }
  }
}
