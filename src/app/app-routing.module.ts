import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from "./notes/notes.component";
import { NoteComponent } from "./note/note.component";

const routes: Routes = [
  {
    path: "notes/:note_id",
    component: NoteComponent 
  },
  {
    path: "notes/new",
    component: NoteComponent 
  },
  {
    path: "notes",
    component: NotesComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
