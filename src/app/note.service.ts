import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INote} from './model/notes.interface';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private base_url = "http://localhost:3000/api/v1/";
  private branch = "notes";

  constructor(private http: HttpClient) {}

  getNotes() {
    return this.http.get<INote[]>(`${this.base_url}${this.branch}`)
  }
}
