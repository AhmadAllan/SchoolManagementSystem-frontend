import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parent } from '../interfaces/parent';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private apiUrl = 'http://localhost:8080/api/v1/parent';

  constructor(private http: HttpClient) {}

  getAllParents(): Observable<Parent[]> {
    return this.http.get<Parent[]>(`${this.apiUrl}/getAll`);
  }

  getParentById(parentId: number): Observable<Parent> {
    return this.http.get<Parent>(`${this.apiUrl}/get/${parentId}`);
  }

  createParent(parent: Parent): Observable<Parent> {
    return this.http.post<Parent>(`${this.apiUrl}/post`, parent);
  }

  updateParent(parentId: number, parent: Parent): Observable<Parent> {
    return this.http.put<Parent>(`${this.apiUrl}/put/${parentId}`, parent);
  }

  deleteParent(parentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${parentId}`);
  }
}
