import { Component, OnInit , Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  constructor(private snackBar:MatSnackBar,private noteService:NoteServiceService, public dialogRef: MatDialogRef<UpdateNoteComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private datasharing:DataServiceService) { }
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
  removeImage(note:any)
  {
    console.log();
    
    this.noteService.RemoveImage(note.noteId).subscribe((result:any)=>{
      this.datasharing.changeMessage(true);
      this.dialogRef.close();
    });
  }
  
}
