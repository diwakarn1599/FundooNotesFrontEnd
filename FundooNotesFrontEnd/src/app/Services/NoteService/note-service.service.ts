import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private httpService:HttpServiceService) { }

  header = {
    headers:{ Authorization:"Bearer " + localStorage.getItem('token')}
  };
  CreateNote(data:any){
    return this.httpService.post(`${environment.baseUrl}/api/register`,data,true,this.header);
  }
}

