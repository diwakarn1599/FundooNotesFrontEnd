import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CollaboratorComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private noteService: NoteServiceService) { }
  AddCollaboratorForm!: FormGroup;
  userDetails:any;
  params:any;
  collaborators:any = [];
  ngOnInit(): void {
    this.AddCollaboratorForm = new FormGroup({
      email: new FormControl('',[Validators.required])
    });
    this.userDetails = JSON.parse(localStorage.getItem('userDetails')!);
    this.getCollaborators();
  }
  close() {
    this.dialogRef.close();
  }
  getCollaborators()
  {
    this.noteService.GetCollaborators(this.data.data.noteId).subscribe((result:any)=>
    {
      this.collaborators = result.data;
      console.log(result);
      console.log(result.data,"data");
      
    });
    console.log(this.collaborators,"collabs");
    
  }
  
  addCollaborator()
  {
    this.params = {
      NoteId:this.data.data.noteId,
      OwnerEmailId:this.userDetails.email,
      CollaboratorEmailId:this.AddCollaboratorForm.value.email
    }
    this.noteService.AddCollaborator(this.params).subscribe();
    this.getCollaborators();
  }
  RemoveCollaborator(id:any)
  {
    this.noteService.RemoveCollaborator(id,this.data.data.noteId).subscribe();
  }
}
