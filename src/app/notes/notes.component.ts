import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { INote } from './notes.interface';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: INote[] = [];

  constructor( private service: NoteService ) {}

  ngOnInit(): void {
    this.service.getNotes()
      .subscribe((response) => {
        this.notes = response;
      });
  }

}
