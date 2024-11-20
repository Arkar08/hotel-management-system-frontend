import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  titleName:string = ''
  roomNumber:string = '';
  price:string='';
  maxPeople:string = '';
  description:string = ''

  uploadImages = {
    url:'',
    name:''
  }

  imagesId :string = ''

  roomTitle:any[]=[]

  roomDetails:any;

  constructor(private service:ApiService){}
  ngOnInit(): void {
    this.getRoomTitle()
  }


  getRoomTitle(){
    this.service.getData('staff/singlepage/title').subscribe((res:any)=>{
      this.roomTitle = res
    },error =>{
      console.log(error , 'getroomtitle error is')
    })
  }


  titleChange(data:any){
    this.titleName = data.value;
  }

  upload(event:any){
    if (event.target.files && event.target.files[0]) {
      this.uploadImages.name = event.target.files[0].name;
              var reader = new FileReader();
              reader.onload = (event:any) => {
                this.uploadImages.url = event.target.result;
                if(this.uploadImages.url !== ''){
                  this.service.postData('staff/singlepage/upload',this.uploadImages).subscribe((res:any)=>{
                    this.imagesId = res._id;
                  },error =>{
                    console.log(error , 'error is')
                  })
                }
              }
              reader.readAsDataURL(event.target.files[0]);
    }
  }

  saveRoom(){
    this.roomDetails = {
      title:this.titleName,
      price:Number(this.price),
      description:this.description,
      maxPeople:Number(this.maxPeople),
      roomNumbers:Number(this.roomNumber),
      images:this.imagesId
    }
    console.log(this.imagesId)
    this.service.postData('rooms',this.roomDetails).subscribe((res:any)=>{
      console.log(res)
    },error=>{
      console.log(error, 'post room error is')
    })
  }

}
