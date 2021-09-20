import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  post(url:string,data:any=null,isHeaderRequired:any=false,headers:any=false)
  {
    console.log(url,data+"value");
    return this.http.post(url,data,isHeaderRequired && headers)
  }

  put(url:string,data:any=null,isHeaderRequired:any=false,headers:any=false)
  {
    console.log("httpservice",url,data);
    
    console.log(url,data+"value");
    return this.http.put(url,data,isHeaderRequired && headers)
  }
}
