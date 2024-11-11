import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

const Api_Url = environment.apiUrl;
// const Api_Url = "http://localhost:9090/api/v1/"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  postData(url:string,data:any):Observable<any>{
    const dataUrl = Api_Url + url;
    return this.http.post<any>(dataUrl , data,{
      withCredentials: true
    })
  }

  getData(url:string):Observable<any>{
    const dataUrl = Api_Url + url;
    return this.http.get<any>(dataUrl)
  }

  patchData(url:string,data:any):Observable<any>{
    const dataUrl = Api_Url + url;
    return this.http.patch<any>(dataUrl ,data)
  }

  deleteData(url:string,data:any):Observable<any>{
    const dataUrl = Api_Url + url;
    return this.http.delete<any>(dataUrl , data)
  }

}
