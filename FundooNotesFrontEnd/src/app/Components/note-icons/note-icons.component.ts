import { Component, OnInit } from '@angular/core';
import { AddNoteComponent } from '../add-note/add-note.component';
@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {

  constructor(private addNote:AddNoteComponent) { }

  ngOnInit(): void {
  }
  Close()
  {
    this.addNote.bigNote = false;
    this.addNote.smallNote=true;
  }
}
