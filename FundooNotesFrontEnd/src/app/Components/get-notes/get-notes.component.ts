import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, Injectable, NgModule, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
@Injectable({ 
  providedIn: 'root'
})
@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {
  notes:any=[];
  constructor(private snackBar:MatSnackBar, private noteService:NoteServiceService) {}
  noteColor= "#fff";
  pinned = false;
  isReminder=false;
  Reminder="";
  hovered = false;
  ngOnInit(): void {
    this.getNotes();
  }
  pinNote()
  {
    this.pinned=!this.pinned;
  }
  getNotes()
   {
     console.log("getnote");
     this.noteService.GetNotes().subscribe((result: any) => {
      this.notes=result.data;
      console.log(this.notes);
    });
   }
  RemoveReminder()
  {
    this.isReminder = false;
    this.snackBar.open('Reminder Deleted', '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });
  }
  
  // {
  //   Title:"asfd",
  //   Description:"asdf",
  //   Color:"#fff",
  //   Reminder:"asdf",
  //   Image:"Asfd",
  //   Pin:false,
  //   Archive:false,
  //   Trash:false,
  //   NoteId:1
  // },
  // {
  //   Title:"asfd",
  //   Description:"asdf",
  //   Color:"#fff",
  //   Reminder:null,
  //   Image:"Asfd",
  //   Pin:true,
  //   Archive:false,
  //   Trash:false,
  //   NoteId:2
  // }
}
