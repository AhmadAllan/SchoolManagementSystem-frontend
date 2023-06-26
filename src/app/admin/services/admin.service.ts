import { Injectable } from '@angular/core';
import { Admin } from '../interfaces/admin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/v1/admin';

  constructor(private http: HttpClient) {}

  getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.apiUrl}/getAll`);
  }

  getAdminById(adminId: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiUrl}/get/${adminId}`);
  }

  createAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.apiUrl}/post`, admin);
  }

  updateAdmin(adminId: number, admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.apiUrl}/put/${adminId}`, admin);
  }

  deleteAdmin(adminId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${adminId}`);
  }
}
