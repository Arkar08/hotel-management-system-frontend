import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() maxPeople:string | undefined;
  @Input() price:number | undefined;
  @Input() title:string | undefined;
  @Input() image:string | undefined;

constructor(){}
ngOnInit(): void {
}
}
