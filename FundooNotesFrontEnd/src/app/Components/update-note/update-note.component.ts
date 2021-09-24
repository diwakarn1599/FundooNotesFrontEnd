import { Component, OnInit , Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  constructor(private snackBar:MatSnackBar,private noteService:NoteServiceService, public dialogRef: MatDialogRef<UpdateNoteComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
  bigNote:boolean = false;
  EditNoteForm !: FormGroup;
  pinned = false;
  noteColor = "#fff";
  isReminder=false;
  Reminder="";
  ngOnInit(): void {
    console.log(this.data,"diwa");
    
    this.EditNoteForm = new FormGroup({
      Title: new FormControl(),
      Description:new FormControl()
    });
  }
  pinNote(note:any)
  {
    console.log(note);
    this.noteService.TogglePin(note.noteId).subscribe();
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
  Close(note:any) 
  {
    this.noteService.UpdateNote(note).subscribe();
    this.dialogRef.close();
  }
  
}
