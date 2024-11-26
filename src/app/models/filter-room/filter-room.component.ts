import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-filter-room',
  templateUrl: './filter-room.component.html',
  styleUrls: ['./filter-room.component.css']
})
export class FilterRoomComponent implements OnInit{ 
  title:string = ''
  minPrice:string = ''
  maxPrice:string = ''
  maxPeople:string = ''
  status:string = ''

  filterDetails:any;

  allTitle:any[]=[]
  allPrice:any[]=[]
  allPeople:any[]=[]

  constructor(private dialogRef:MatDialogRef<FilterRoomComponent>,private service:ApiService){}
  ngOnInit(): void {
      this.getTitle()
      this.getPrice()
      this.getPeople()
  }

  changeSelect(data:any,world:string){
    if(world === 'title'){
      this.title = data.value;
    }else if(world === 'minPrice'){
      this.minPrice = data.value;
    }else if(world === 'maxPrice'){
      this.maxPrice = data.value;
    }else if(world === 'maxPeople'){
      this.maxPeople = data.value;
    }else if(world === 'status'){
      this.status = data.value;
    }
  }

  apply(){
    this.filterDetails = {
      minPrice:this.minPrice,
      maxPrice:this.maxPrice,
      maxPeople:this.maxPeople,
      status:this.status
    }
    this.dialogRef.close(this.filterDetails)
  }
  cancel(){
    this.dialogRef.close(null)
  }

  getTitle(){
    this.service.getData('filter/room/dropdown/title').subscribe((res:any)=>{
      this.allTitle = res;
    },error =>{
      console.log(error , 'get title error is')
    })
  }


  getPrice(){
    this.service.getData('filter/room/dropdown/price').subscribe((res:any)=>{
      this.allPrice = res
    },error =>{
      console.log(error , 'error is')
    })
  }

  getPeople(){
    this.service.getData('filter/room/dropdown/maxPeople').subscribe((res:any)=>{
      this.allPeople = res
    },error =>{
      console.log(error , 'error is')
    })
  }
}
