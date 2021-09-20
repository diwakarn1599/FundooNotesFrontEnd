import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { AddNoteComponent } from '../add-note/add-note.component';
@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {

  constructor(private addNote:AddNoteComponent,private noteService:NoteServiceService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  Close()
  {
    this.addNote.bigNote = false;
    this.addNote.smallNote=true;
    this.noteService.CreateNote(this.addNote.NoteForm.value)
    .subscribe((result:any)=>{
      this.snackBar.open(`${result.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    },error => {  
      this.snackBar.open(`${error.error.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
  });
}
}
