import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { GetNotesComponent } from '../get-notes/get-notes.component';

@Component({
  selector: 'app-get-note-icons',
  templateUrl: './get-note-icons.component.html',
  styleUrls: ['./get-note-icons.component.scss']
})
export class GetNoteIconsComponent implements OnInit {

  archive = false;
  constructor(private getNote:GetNotesComponent,private datasharing:DataServiceService,public dialog: MatDialog,private snackBar: MatSnackBar,private noteService:NoteServiceService) { }
  @Input() note: any;
  id:any;
  colors: any[] = [
    {
      "color": "#fff",
      "toolTip": "default",
      "icon": true
    },
    {
      "color": "#F28B82",
      "toolTip": "Red",
      "icon": false
    },
    {
      "color": "#FBBC04",
      "toolTip": "Orange"
    },
    {
      "color": "#FFF475",
      "toolTip": "Yellow",
      "icon": false
    },
    {
      "color": "#CCFF90",
      "toolTip": "Green",
      "icon": false
    },
    {
      "color": "#A7FFEB",
      "toolTip": "Teal",
      "icon": false
    },
    {
      "color": "#CBF0F8",
      "toolTip": "Blue",
      "icon": false
    },
    {
      "color": "#AECBFA",
      "toolTip": "Dark Blue",
      "icon": false
    },
    {
      "color": "#D7AEFB",
      "toolTip": "Purple",
      "icon": false
    },
    {
      "color": "#FDCFE8",
      "toolTip": "Pink",
      "icon": false
    },
    {
      "color": "#E6C9A8",
      "toolTip": "Brown",
      "icon": false
    },
    {
      "color": "#E8EAED",
      "toolTip": "Gray",
      "icon": false
    }
  ];
  reminders: any[] = [
    {
      "Text": "Later Today",
      "Time": "8:00 PM"
    },
    {
      "Text": "Tommorow",
      "Time": "8:00 AM"
    },
    {
      "Text": "Next Week",
      "Time": "8:00 AM"
    }
  ];
  isArchive:any;
  ngOnInit(): void {
    this.getIcon();
    this.isArchive = this.note.archive?"unarchive":"archive";
  }
  getIcon()
  {
    for (var val of this.colors)
      val.icon = val.color == this.note.color ? true : false;
  }
  UpdateReminder(rem:any) {
    
    console.log(this.note);
    this.noteService.ChangeReminder(this.note.noteId,`${rem.Text},${rem.Time}`).subscribe((result:any)=>{
      this.datasharing.changeMessage(true);
    });
    
  }
  ChangeColor(color:string) {
    console.log(color,"diwa");
    
    this.noteService.ChangeNoteColor(this.note.noteId,color).subscribe((result:any)=>{
      this.datasharing.changeMessage(true);
    });
  }
  archiveNote()
  {
    this.noteService.ToggleArchive(this.note.noteId).subscribe((result:any)=>{
      this.datasharing.changeMessage(true);
    });
    this.snackBar.open(`${this.note.archive?'Note Unarchived':'Note Archived'}`, '', {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
  }
  moveToTrash()
  {
    this.noteService.MoveToTrash(this.note.noteId).subscribe((result:any)=>{
      this.datasharing.changeMessage(true);
    });
  }
  openDialog() {
    this.dialog.open(CollaboratorComponent, {data: {
      data: this.note
    }});
  }
  onFileChanged(event: any)
  {
    var files: File=event.target.files.item(0);
      console.log(event.target.files.item(0));
      const form = new FormData();
      form.append('imageProps',files,files.name);
      console.log(form)
      console.log(this.note.noteId);
      this.noteService.addImage(this.note.noteId,form).
      subscribe((result:any)=>{
        this.datasharing.changeMessage(true);
        console.log(result);
      });
    }
  

}
