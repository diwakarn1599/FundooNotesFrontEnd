import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { GetNotesComponent } from '../get-notes/get-notes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened: boolean = true;
  list: boolean = true;
  constructor(private router:Router,private noteService:NoteServiceService) { }
  labels:any=[];
  page="notes";
  ngOnInit(): void {
    this.getAllLabels();
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
