import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INote } from './model/notes.interface';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private base_url = "http://localhost:3000/api/v1/";
  private branch = "notes";

  constructor(private http: HttpClient) {}

  getNotes() {
    return this.http.get<INote[]>(`${this.base_url}${this.branch}`);
  }

  getNote(id: any) {
    return this.http.get<INote>(`${this.base_url}${this.branch}/${id}`);
  }

  addNote(note: any) {
    return this.http.post(`${this.base_url}${this.branch}`, note);
  }

  updateNote(id: any, note: any) {
    return this.http.put(`${this.base_url}${this.branch}/${id}`, note);
  }

  removeNote(id: any) {
    return this.http.delete(`${this.base_url}${this.branch}/${id}`);
  }
}
