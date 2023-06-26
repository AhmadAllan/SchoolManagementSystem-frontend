import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/api/v1/student';

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/getAll`);
  }

  getStudentById(studentId: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/get/${studentId}`);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}/post`, student);
  }

  updateStudent(studentId: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/put/${studentId}`, student);
  }

  deleteStudent(studentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${studentId}`);
  }
}
