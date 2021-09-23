import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
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
  GetUserLabels()
  {
    return this.httpService.get(`${environment.baseUrl}/api/getLabelofUser?userId=${this.uid}`,null,null,this.header);
  }
  GetArchiveNotes()
  {
    return this.httpService.get(`${environment.baseUrl}/api/getArchive?userId=${this.uid}`,null,null,this.header);
  }
  GetReminderNotes()
  {
    return this.httpService.get(`${environment.baseUrl}/api/getReminder?userId=${this.uid}`,null,null,this.header);
  }
  GetTrashNotes()
  {
    return this.httpService.get(`${environment.baseUrl}/api/getTrash?userId=${this.uid}`,null,null,this.header);
  }
  ChangeNoteColor(id:any,color:string)
  {
    console.log(id,color);
    let params = new HttpParams().set('noteId',id).set('color',color);
    return this.httpService.put(`${environment.baseUrl}/api/changeColor`,params,true,this.header);
  }
  ChangeReminder(id:any,rem:string)
  {
    console.log(id,rem);
    let params = new HttpParams().set('noteId',id).set('reminder',rem);
    return this.httpService.put(`${environment.baseUrl}/api/setReminder`,params,true,this.header);
  }
  RemoveReminder(id:any)
  {
    console.log(id);
    let params = new HttpParams().set('noteId',id);
    return this.httpService.put(`${environment.baseUrl}/api/deleteReminder`,params,true,this.header);
  }
  TogglePin(id:any)
  {
    let params = new HttpParams().set('noteId',id);
    return this.httpService.put(`${environment.baseUrl}/api/togglePin`,params,true,this.header);
  }
  ToggleArchive(id:any)
  {
    let params = new HttpParams().set('noteId',id);
    return this.httpService.put(`${environment.baseUrl}/api/toggleArchive`,params,true,this.header);
  }
  MoveToTrash(id:any)
  {
    let params = new HttpParams().set('noteId',id);
    return this.httpService.put(`${environment.baseUrl}/api/moveToTrash`,params,true,this.header);
  }
  DeleteNoteForever(id:any)
  {
    return this.httpService.delete(`${environment.baseUrl}/api/deleteNote?noteId=${id}`,true,this.header);
  }
  RestoreNote(id:any)
  {
    let params = new HttpParams().set('noteId',id);
    return this.httpService.put(`${environment.baseUrl}/api/restoreNote`,params,true,this.header);
  }
}

