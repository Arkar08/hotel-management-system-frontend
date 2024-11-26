
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './../../../service/api.service';
import { FilterRoomComponent } from './../../../models/filter-room/filter-room.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  title: string;
  price: number;
  description: string;
  maxPeople:number;
  roomNumbers:number;
  status:string;
  image:string;
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
  selector: 'app-staff-room',
  templateUrl: './staff-room.component.html',
  styleUrls: ['./staff-room.component.css']
})
export class StaffRoomComponent implements OnInit {
  loading:boolean = true;
  constructor(private dialog:MatDialog,private service:ApiService){}
  ngOnInit(): void {
    this.getRoom()
  }

  displayedColumns: string[] = ['id','images','title',  'roomNumbers', 'maxPeople','price','description','status'];
  dataSource:any;


  filter(){
    const dialogRef = this.dialog.open(FilterRoomComponent,{
      width:'900px'
    })
    dialogRef.afterClosed().subscribe((result:any)=>{
      if(result !== null && result !== undefined){
        if(result.title !== '' && result.minPrice !== '' && result.maxPrice !== '' && result.maxPeople !== '' && result.status !== ''){
          this.service.getData(`filter/room/?title=${result.title}&&minPrice=${result.minPrice}&&maxPrice=${result.maxPrice}&&maxPeople=${result.maxPeople}&&status=${result.status}}`).subscribe((res:any)=>{
            this.generateTable(res)
          },error =>{
            console.log(error , 'filter error is')
          })
        }else if(result.title !== ''){
          this.service.getData(`filter/room/?title=${result.title}`).subscribe((res:any)=>{
            this.generateTable(res)
          },error =>{
            console.log(error ,'error is')
          })
        }else if(result.minPrice !== '' && result.maxPrice !== ''){
          this.service.getData(`filter/room/?minPrice=${result.minPrice}&&maxPrice=${result.maxPrice}`).subscribe((res:any)=>{
            this.generateTable(res)
          },error =>{
            console.log(error , 'error is')
          })
        }else if(result.status !== ''){
          this.service.getData(`filter/room/?status=${result.status}`).subscribe((res:any)=>{
            this.generateTable(res)
          },error =>{
            console.log(error, 'error is')
          })
        }else if(result.maxPeople !== ''){
          this.service.getData(`filter/room/?maxPeople=${result.maxPeople}`).subscribe((res:any)=>{
            this.generateTable(res)
          },error =>{
            console.log(error , 'error is')
          })
        } 
      }else{
        this.service.getData('rooms').subscribe((res:any)=>{
          this.generateTable(res)
        },error=>{
          console.log(error , 'get data error is')
        })
      }
    })
  }

  getRoom(){
    this.loading = true;
    this.service.getData('rooms').subscribe((res:any)=>{
      this.loading = false;
      this.generateTable(res)
    },error=>{
      console.log(error,'room error is')
    })
  }

  generateTable(data:any){
    this.dataSource = new MatTableDataSource<PeriodicElement>(data)
  }
}
