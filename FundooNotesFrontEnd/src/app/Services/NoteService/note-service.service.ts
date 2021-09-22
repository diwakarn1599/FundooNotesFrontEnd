import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  userDetails= JSON.parse(localStorage.getItem('userDetails')!);
  constructor(private httpService:HttpServiceService) { }
  
  header = {
    headers:{ Authorization:"Bearer " + localStorage.getItem('token')}
  };
  CreateNote(data:any){
    // const params = {
    //   Title:data.Title,
    //   Description:data.Description,
    //   UserId:this.userDetails.userId,
    //   color:noteColor
    // }
    data.UserId= this.userDetails.userId;
    return this.httpService.post(`${environment.baseUrl}/api/addNotes`,data,true,this.header);
  }
}

