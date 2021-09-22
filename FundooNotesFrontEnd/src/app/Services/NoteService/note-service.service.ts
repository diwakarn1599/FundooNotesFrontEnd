import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  userDetails= JSON.parse(localStorage.getItem('userDetails')!);
  constructor(private httpService:HttpServiceService) { }
  uid=this.userDetails.userId;
  header = {
    headers:{ Authorization:"Bearer " + localStorage.getItem('token')}
  };
  CreateNote(data:any){
    data.UserId= this.uid;
    return this.httpService.post(`${environment.baseUrl}/api/addNotes`,data,true,this.header);
  }
  GetNotes()
  {
    return this.httpService.get(`${environment.baseUrl}/api/getNotes?userId=${this.uid}`,null,null,this.header);
  }
}

