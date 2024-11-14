import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  title:string = ''
  roomNumber:number = 0;
  price:number = 0;
  maxPeople:number = 0;
  description:string = ''
  images:any[] = []

  constructor(){}
  ngOnInit(): void {

  }

}
