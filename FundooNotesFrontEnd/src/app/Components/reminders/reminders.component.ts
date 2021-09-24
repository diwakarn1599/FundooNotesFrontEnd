import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  notes:any=[];
  showpinnedNotes:any=false;
  constructor(private snackBar:MatSnackBar, private noteService:NoteServiceService,public dialog: MatDialog) {}
  noteColor= "#fff";
  pinned = false;
  isReminder=false;
  Reminder="";
  hovered = false;
  ngOnInit(): void {
    this.getNotes();
  }
  pinNote(note:any)
  {
    console.log(note);
    this.noteService.TogglePin(note.noteId).subscribe();
  }
  getNotes()
   {
     console.log("Get Archive Notes");
     this.noteService.GetReminderNotes().subscribe((result: any) => {
      this.notes=result.data;
      console.log(this.notes);
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
  RemoveReminder()
  {
    this.isReminder = false;
    this.snackBar.open('Reminder Deleted', '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });
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
