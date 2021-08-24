import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { INote } from '../model/notes.interface'

import { ActivatedRoute } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { IResponse } from '../model/response.interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  
  note_id: any;
  note = {} as INote;
  noteForm = {} as FormGroup;

  constructor(private route: ActivatedRoute, private service: NoteService) { 
    this.route.paramMap.subscribe(params => {
      this.note_id = params.get('note_id');
      if (this.note_id === "new") return null;
      this.service.getNote(this.note_id).subscribe(response => {
        this.note = response;
        
        // initialize the task form array if there is any values
        let tasksFormArray = new FormArray([]); 
        if (this.note.tasks != null) {
          for (let i = 0; i < this.note.tasks.length; i++) {
            tasksFormArray.push(new FormControl(this.note.tasks[i]));
          }
        }
        
        // initialize the note Form
        this.noteForm = new FormGroup({
          name: new FormControl(this.note.name),
          finish_date: new FormControl(this.note.finish_date),
          level: new FormControl(this.note.level),
          tasks: tasksFormArray
        })
      });
      return null;
    })
  }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      name: new FormControl(),
      finish_date: new FormControl(),
      level: new FormControl(),
      tasks: new FormArray([]) 
    });
  }

  addTask(one_task: HTMLInputElement) {
    (this.tasks as FormArray).push(
      new FormGroup({
        details: new FormControl(one_task.value)
      })
    );
    one_task.value = '';
  }

  removeTask(task: any){
    let index = this.tasks.controls.indexOf(task);
    this.tasks.removeAt(index);
  }

  create() {
    console.log(this.noteForm);
    this.service.addNote(this.noteForm.value).subscribe(response => {
      console.log(response);
      let resp = response as IResponse;
      if (resp.status != "SUCCESS") alert("Error Happend!");
    });
  }

  update() {
    console.log(this.noteForm);
    this.service.updateNote(this.note_id, this.noteForm.value).subscribe(response => {
      console.log(response);
      let resp = response as IResponse;
      if (resp.status != "SUCCESS") alert("Error Happend!");
    });
  }

  on_delete(id: any) {

  }

  toggleModal() {

  }

  get tasks() {
    return this.noteForm.get('tasks') as FormArray;
  }

}
