import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetNotesComponent } from '../get-notes/get-notes.component';

@Component({
  selector: 'app-get-note-icons',
  templateUrl: './get-note-icons.component.html',
  styleUrls: ['./get-note-icons.component.scss']
})
export class GetNoteIconsComponent implements OnInit {
  archive = false;
  constructor(private getNote:GetNotesComponent,private snackBar: MatSnackBar) { }
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
  AddReminder(rem: any) {
    this.getNote.isReminder = true;
    this.getNote.Reminder = `${rem.Text},${rem.Time}`
  }
  ChangeColor(color: any) {
    this.getNote.noteColor = color;
    for (var val of this.colors)
      val.icon = val.color == color ? true : false;
  }
  archiveNote()
  {
    this.snackBar.open(`${this.archive?'Note Unarchived':'Note Archived'}`, '', {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    this.archive=!this.archive;
  }

}
