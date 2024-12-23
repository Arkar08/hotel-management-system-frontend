import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './../../../service/api.service';
import { ViewUserComponent } from './../../../models/view-user/view-user.component';
import { FilterUserComponent } from './../../../models/filter-user/filter-user.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

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
  isActive:boolean;
  role:string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, fullName: 'Hydrogen', phNo: "1.0079", profileImage: 'H',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
//   {id: 2, fullName: 'Helium', phNo: "4.0026", profileImage: 'He',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
//   {id: 3, fullName: 'Lithium', phNo: "6.941", profileImage: 'Li',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
//   {id: 4, fullName: 'Beryllium', phNo: "9.0122", profileImage: 'Be',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:false},
//   {id: 5, fullName: 'Boron', phNo: "10.811", profileImage: 'B',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
//   {id: 6, fullName: 'Carbon', phNo: "12.0107", profileImage: 'C',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
//   {id: 7, fullName: 'Nitrogen', phNo: "14.0067", profileImage: 'N',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
//   {id: 8, fullName: 'Oxygen', phNo: "15.9994", profileImage: 'O',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
//   {id: 9, fullName: 'Fluorine', phNo: "18.9984", profileImage: 'F',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
//   {id: 10, fullName: 'Neon', phNo: "20.1797", profileImage: 'Ne',email: 'Hydrogen', address: "1.0079", NRCNO: 'H',date:'134567',isActive:true},
// ];


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  details = {
    isActive:true
  }
  loading :boolean = true;

  constructor(private dialog:MatDialog , private service:ApiService){}
  ngOnInit(): void {
    this.getUser()
  }

  displayedColumns: string[] = ['id','profileImage', 'fullName', 'email', 'NRCNO','phNo','state','township','date','role','isActive','action'];
  dataSource:any;


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
    this.loading = true
    this.service.getData('users').subscribe((res:any)=>{
      this.generateTable(res)
      this.loading = false;
    },error =>{
      console.log(error , 'error is')
    })
  }


  toggle(data:any){
      this.details = {
        isActive:false
      };
      this.loading = true;
      this.service.getData(`users/${data}`).subscribe((result:any)=>{
        if(result.role !== 'admin'){
          this.service.patchData(`users/${data}`,this.details).subscribe((res:any)=>{
            this.service.getData('users').subscribe((result:any)=>{
              this.generateTable(result)
              this.loading = false;
            },error =>{
              console.log(error , 'isActive getError')
            })
            },error =>{
              console.log(error ,'isActive error is')
        })
        }else{
          this.service.getData('users').subscribe((result:any)=>{
            this.generateTable(result)
            this.loading = false;
          },error =>{
            console.log(error , 'isActive getError')
          })
        }
      })
  }


  toggleOff(data:any){
      this.details = {
        isActive:true
      };
      this.loading = true;
      this.service.patchData(`users/${data}`,this.details).subscribe((res:any)=>{
        this.service.getData('users').subscribe((result:any)=>{
          this.generateTable(result)
          this.loading = false;
        },error =>{
          console.log(error , 'isActive getError')
        })
    },error =>{
      console.log(error ,'isActive error is')
    })
     
  }

  
  generateTable(data:any){
    this.dataSource = new MatTableDataSource<PeriodicElement>(data)
  }

  download(){
    const doc = new jsPDF();
    autoTable(doc, { html: '#table-to-pdf'})
    // const content = 'UserDetails';
    // doc.text(content,10,10)
    // const pdf = doc.output('blob');
    // const link = document.createElement('a');
    // link.href = URL.createObjectURL(pdf);
    // link.download = 'Customer.pdf'; // Specify the filename
    // link.click(); 
    doc.save('table.pdf')
  }


} 
