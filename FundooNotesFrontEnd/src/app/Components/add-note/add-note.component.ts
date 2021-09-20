import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  smallNote:boolean = true;
  bigNote:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showNote()
  {
    this.smallNote = false;
    this.bigNote = true;
  }
}
