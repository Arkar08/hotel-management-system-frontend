import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  allPopularList:any[]=[];
  isloading:boolean = true;
constructor(private service:ApiService){}
ngOnInit(): void {
    this.getPopularList()
}

getPopularList(){
  this.isloading = true;
  this.service.getData('rooms').subscribe((res:any)=>{
    if(res){
      this.isloading = false;
      this.allPopularList = res
    }
  },error =>{
    console.log(error , 'getPopular list error is')
  })
}

}
