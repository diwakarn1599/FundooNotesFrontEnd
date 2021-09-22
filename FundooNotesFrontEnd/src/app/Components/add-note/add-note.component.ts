import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  smallNote:boolean = true;
  bigNote:boolean = false;
  NoteForm !: FormGroup;
  pinned:boolean = false;
  noteColor = "#fff";
  isReminder=false;
  Reminder="";
  constructor(private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.NoteForm = new FormGroup({
      Title: new FormControl(),
      Description:new FormControl()
    });
  }
  showNote()
  {
    this.smallNote = false;
    this.bigNote = true;
  }
  pinNote()
  {
    // this.snackBar.open(`${this.pinned?'Note Unpinned':'Note Pinned'}`, '', {
    //     duration: 2000,
    //     verticalPosition: 'bottom',
    //     horizontalPosition: 'left'
    //   });
      this.pinned=!this.pinned;
    
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
}
