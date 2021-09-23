import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { HomeComponent } from './Components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AddNoteComponent } from './Components/add-note/add-note.component';
import { NoteIconsComponent } from './Components/note-icons/note-icons.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CollaboratorComponent } from './Components/collaborator/collaborator.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { GetNoteIconsComponent } from './Components/get-note-icons/get-note-icons.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { RemindersComponent } from './Components/reminders/reminders.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    HomeComponent,
    AddNoteComponent,
    NoteIconsComponent,
    CollaboratorComponent,
    GetNotesComponent,
    GetNoteIconsComponent,
    ArchiveComponent,
    RemindersComponent,
    TrashNotesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [GetNoteIconsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
