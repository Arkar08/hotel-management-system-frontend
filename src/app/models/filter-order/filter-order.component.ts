import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-filter-order',
  templateUrl: './filter-order.component.html',
  styleUrls: ['./filter-order.component.css']
})
export class FilterOrderComponent implements OnInit {
  allUser:any[]=[]
  allroomNumber:any[]=[]

  fromDate :string = ''
  toDate:string = ''
  userId:string = ''
  roomNumber:string = ''

  postDetails:any;
  dateFrom :string = ''
  dateEnd:string = ''


  constructor(private service:ApiService,private dialogRef:MatDialogRef<FilterOrderComponent>){}
  ngOnInit(): void {
      this.getCustomerName()
      this.getRoomNumber()
  }

  getCustomerName(){
    this.service.getData('filter/user/dropdown/customer').subscribe((res:any)=>{
      this.allUser = res;
    },error =>{
      console.log(error , 'error is')
    })
  }

  getRoomNumber(){
    this.service.getData('filter/room/dropdown/roomNumber').subscribe((res:any)=>{
      this.allroomNumber = res;
    },error =>{
      console.log(error , 'error is')
    })
  }

  dateChange(data:any,text:string){
    if(text === 'fromDate'){
      this.fromDate = data
    }else if(text === 'toDate'){
      this.toDate = data
    }
  }

  selectChange(data:any,text:string){
    if(text === 'roomNumber'){
      this.roomNumber = data.value;
    }else if(text === 'user'){
      this.userId = data.value;
    }
  }
  apply(){
    if(this.fromDate !== ''){
      const startDate = JSON.stringify(this.fromDate)
      this.dateFrom=startDate.slice(1,11)
    }
    if(this.toDate !== ''){
      const endDate = JSON.stringify(this.toDate)
      this.dateEnd=endDate.slice(1,11)
    }
    this.postDetails = {
      fromDate:this.dateFrom,
      toDate:this.dateEnd,
      userId:this.userId,
      roomNumber:this.roomNumber
    }
    this.dialogRef.close(this.postDetails)
  }
  reset(){
    this.dialogRef.close(null)
  }
}
