import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './../../../service/api.service';
import { DeleteAdminRoomComponent } from './../../../models/delete-admin-room/delete-admin-room.component';
import { EditRoomComponent } from './../../../models/edit-room/edit-room.component';
import { FilterRoomComponent } from './../../../models/filter-room/filter-room.component';
import { CreateRoomComponent } from './../../../models/create-room/create-room.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


export interface PeriodicElement {
  id: number;
  title: string;
  price: number;
  description: string;
  maxPeople:number;
  roomNumbers:number;
  status:string;
  images:string;
}



// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, title: '3', price: 1.0079, description: 'H',maxPeople: 3, roomNumbers: 1.0079, status: 'H',images:[{photo:'blah',name:'photo1'}]},
//   {id: 2, title: 'Helium', price: 4.0026, description: 'He',maxPeople: 3, roomNumbers: 1.0079, status: 'H',images:[{photo:'blah',name:'photo1'}]},
//   {id: 3, title: 'Lithium', price: 6.941, description: 'Li',maxPeople: 3, roomNumbers: 1.0079, status: 'H',images:[{photo:'blah',name:'photo1'}]},
//   {id: 4, title: 'Beryllium', price:9.0122, description: 'Be',maxPeople: 3, roomNumbers: 1.0079, status: 'H',images:[{photo:'blah',name:'photo1'}]},
//   {id: 5, title: 'Boron', price: 10.811, description: 'B',maxPeople: 3, roomNumbers: 1.0079, status: 'H',images:[{photo:'blah',name:'photo1'}]},
//   {id: 6, title: 'Carbon', price: 12.010, description: 'C',maxPeople: 3, roomNumbers: 1.0079, status: 'H',images:[{photo:'blah',name:'photo1'}]},
//   {id: 7, title: 'Nitrogen', price: 14.0067, description: 'N',maxPeople: 3, roomNumbers: 1.0079, status: 'H',images:[{photo:'blah',name:'photo1'}]},
//   {id: 8, title: 'Oxygen', price: 15.9994, description: 'O',maxPeople: 3, roomNumbers: 1.0079, status: 'H',images:[{photo:'blah',name:'photo1'}]},
//   {id: 9, title: 'Fluorine', price: 18.9984, description: 'F',maxPeople: 3, roomNumbers: 1.0079, status: 'H',images:[{photo:'blah',name:'photo1'}]},
//   {id: 10, title: 'Neon', price: 20.1797, description: 'Ne',maxPeople: 3, roomNumbers: 1.0079, status: 'H',images:[{photo:'blah',name:'photo1'}]},
// ];


@Component({
  selector: 'app-admin-room',
  templateUrl: './admin-room.component.html',
  styleUrls: ['./admin-room.component.css']
})
export class AdminRoomComponent implements OnInit {
  loading:boolean= true;
  constructor(private dialog:MatDialog , private service:ApiService){}
  ngOnInit(): void {
    this.getRoom()
  }

  displayedColumns: string[] = ['id','images','title', 'roomNumbers', 'maxPeople','description', 'price','status','action'];
  dataSource:any;

  create(){
    this.dialog.open(CreateRoomComponent,{
      width:'900px'
    })
  }

  filter(){
    this.dialog.open(FilterRoomComponent,{
      width:'900px'
    })
  }

  edit(){
    this.dialog.open(EditRoomComponent,{
      width:'900px'
    })
  }

  delete(){
    this.dialog.open(DeleteAdminRoomComponent,{
      width:'700px'
    })
  }

  getRoom(){
    this.loading = true;
    this.service.getData('rooms').subscribe((res:any)=>{
      this.generateTable(res)
      this.loading = false;
    },error => {
      console.log(error , 'room is')
    })
  }

  generateTable(data:any){
    this.dataSource = new MatTableDataSource<PeriodicElement>(data)
  }
}
