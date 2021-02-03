import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http: HttpClient) { }

  addNote(note: Note, id: number): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/api/addNote/${id}`,
      note
    );
  }

  editNote(note: Note, id: number): Observable<any> {
    return this.http.put<any>(
      `http://localhost:8080/api/editNote/${id}`,
      note
    );
  }
  deleteNote(id: number): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/api/deleteNote/${id}`
    );
  }
  findNote(id: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/findNote/${id}`
    );
  }
}
