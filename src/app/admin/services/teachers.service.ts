import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../interfaces/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private apiUrl = 'http://localhost:8080/api/v1/teacher';

  constructor(private http: HttpClient) {}

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.apiUrl}/getAll`);
  }

  getTeacherById(teacherId: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.apiUrl}/get/${teacherId}`);
  }

  createTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${this.apiUrl}/post`, teacher);
  }

  updateTeacher(teacherId: number, teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.apiUrl}/put/${teacherId}`, teacher);
  }

  deleteTeacher(teacherId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${teacherId}`);
  }
}
