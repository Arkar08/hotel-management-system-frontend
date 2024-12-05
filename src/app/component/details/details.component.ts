import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  room:any;
  isLoading:boolean = true;

  constructor(private router:ActivatedRoute,private service:ApiService,private route:Router){}
  ngOnInit(): void {
      const id = this.router.snapshot.paramMap.get('id')
      this.getRoomId(id)
  }

  getRoomId(data:any){
    this.isLoading = true;
    this.service.getData(`rooms/${data}`).subscribe((res:any)=>{
      if(res){
        this.room = res;
        this.isLoading = false;
      }
    },error =>{
      console.log(error , 'error is')
    })
  }

  arrawBack(){
    this.route.navigateByUrl('customer/home')
  }

}
