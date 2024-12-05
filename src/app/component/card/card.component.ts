import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() id:string | undefined;


  constructor(private router:Router){}
  ngOnInit(): void {

  }
  routerChange(){
    this.router.navigateByUrl(`customer/details/${this.id}`)
  }
}
