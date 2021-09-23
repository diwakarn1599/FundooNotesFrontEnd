import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  notes:any=[];
  hovered=false;
  constructor(private snackBar:MatSnackBar, private noteService:NoteServiceService) {}
  ngOnInit(): void {
    this.getNotes();
  }
  getNotes()
   {
     console.log("Get Archive Notes");
     this.noteService.GetTrashNotes().subscribe((result: any) => {
      this.notes=result.data;
      console.log(this.notes);
    });
    
   }


}
