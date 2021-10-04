import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { EditLabelComponent } from '../edit-label/edit-label.component';
import { GetNotesComponent } from '../get-notes/get-notes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  opened: boolean = true;
  list: boolean = true;
  labelName:any;
  constructor(private router:Router,private noteService:NoteServiceService,public dialog: MatDialog) { }
  labels:any=[];
  page="Fundoo";
  userDetails:any;
  ngOnInit(): void {
    this.getAllLabels();
    this.userDetails = JSON.parse(localStorage.getItem('FundooUserDetails')!);
    console.log("Asd",this.userDetails);
  }
  openDialog()
  {
    
    this.dialog.open(EditLabelComponent, {
      panelClass: 'dialog-container-custom-edit',
       });
  }
  toggleView()
  {
    this.list = !this.list;
  }
  SignOut()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  getAllLabels()
  {
    console.log("getlabel");
     this.noteService.GetUserLabels().subscribe((result: any) => {
      this.labels=result.labels;
      console.log(this.labels);
    });
  }
}
