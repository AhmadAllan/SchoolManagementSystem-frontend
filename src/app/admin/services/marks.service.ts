import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mark } from '../interfaces/mark';

@Injectable({
  providedIn: 'root'
})
export class MarksService {
  private apiUrl = 'http://localhost:8080/api/v1/mark';

  constructor(private http: HttpClient) {}

  getAllMarks(): Observable<Mark[]> {
    return this.http.get<Mark[]>(`${this.apiUrl}/getAll`);
  }

  getMarkById(markId: number): Observable<Mark> {
    return this.http.get<Mark>(`${this.apiUrl}/get/${markId}`);
  }

  createMark(mark: Mark): Observable<Mark> {
    return this.http.post<Mark>(`${this.apiUrl}/post`, mark);
  }

  updateMark(markId: number, mark: Mark): Observable<Mark> {
    return this.http.put<Mark>(`${this.apiUrl}/put/${markId}`, mark);
  }

  deleteMark(markId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${markId}`);
  }
}
