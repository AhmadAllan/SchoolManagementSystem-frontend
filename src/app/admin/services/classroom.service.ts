import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classroom } from '../interfaces/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private apiUrl = 'http://localhost:8080/api/v1/classroom';

  constructor(private http: HttpClient) {}

  getAllClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(`${this.apiUrl}/getAll`);
  }

  getClassroomById(classroomId: number): Observable<Classroom> {
    return this.http.get<Classroom>(`${this.apiUrl}/get/${classroomId}`);
  }

  createClassroom(classroom: Classroom): Observable<Classroom> {
    return this.http.post<Classroom>(`${this.apiUrl}/post`, classroom);
  }

  updateClassroom(classroomId: number, classroom: Classroom): Observable<Classroom> {
    return this.http.put<Classroom>(`${this.apiUrl}/put/${classroomId}`, classroom);
  }

  deleteClassroom(classroomId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${classroomId}`);
  }
}
