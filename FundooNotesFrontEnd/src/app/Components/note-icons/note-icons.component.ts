import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { AddNoteComponent } from '../add-note/add-note.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {

  constructor(private addNote: AddNoteComponent, private noteService: NoteServiceService, private snackBar: MatSnackBar, public dialog: MatDialog) { }
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

  ngOnInit(): void {
  }
  Close() {
    this.addNote.bigNote = false;
    this.addNote.smallNote = true;
    this.noteService.CreateNote(this.addNote.NoteForm.value)
      .subscribe((result: any) => {
        this.snackBar.open(`${result.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });

      }, error => {
        this.snackBar.open(`${error.error.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
      });
    this.addNote.NoteForm.reset();
  }
  ChangeColor(color: any) {
    this.addNote.noteColor = color;
    for (var val of this.colors)
      val.icon = val.color == color ? true : false;
  }
  AddReminder(rem: any) {
    this.addNote.isReminder = true;
    this.addNote.Reminder = `${rem.Text} ${rem.Time}`
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CollaboratorComponent, dialogConfig);
  }
}




