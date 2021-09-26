import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, Injectable, NgModule, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';
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
  showpinnedNotes:any=false;
  isHovered:boolean = false;
  constructor(private snackBar:MatSnackBar,private datasharing:DataServiceService, private noteService:NoteServiceService,public dialog: MatDialog) {}
  noteColor= "#fff";
  pinned = false;
  isReminder=false;
  Reminder="";
  hovered = false;
  ngOnInit(): void {
    this.getNotes();
    this.datasharing.currentMessage.subscribe((change)=>{
      if(change == true){
        this.getNotes();
        this.datasharing.changeMessage(false);
      }
    });
  }
  pinNote(note:any)
  {
    console.log(note);
    this.noteService.TogglePin(note.noteId).subscribe((result:any)=>{
      this.datasharing.changeMessage(true);
    });
    
  }
  getNotes()
   {
     this.noteService.GetNotes().subscribe((result: any) => {
      this.notes=result.data;
      console.log(this.notes,"note retrived");
      for (let note of this.notes) {
        console.log("asdf");
        if(note.pin==true)
        {
          console.log("pin");
          this.showpinnedNotes=true;
          break;
        }
      }
    });
    
   }
  RemoveReminder(note:any)
  {
    this.noteService.RemoveReminder(note.noteId).subscribe(
      (result: any)=>{
        console.log(result);
        this.datasharing.changeMessage(true);
        if(result.status==true)
        this.snackBar.open('Reminder Deleted', '', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
      }
    );
    
  }
  openDialog(note:any)
  {
    console.log(note);
    this.dialog.open(UpdateNoteComponent, {
      panelClass: 'dialog-container-custom',
       data: {
      data: note
    }});
  }
 
  
}
