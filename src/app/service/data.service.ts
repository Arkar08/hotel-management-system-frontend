import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mainData:any[]=[];

  constructor() { }

  postData(data:any){
    this.mainData.push(data);
  }

  getData(){
    return this.mainData;
  }

}
