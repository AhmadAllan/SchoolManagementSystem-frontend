import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;
    return this.http.post(loginUrl, { email, password });
  }

  getUserRoles(): Observable<string[]> {
    const rolesUrl = `${this.apiUrl}/user/roles`;
    return this.http.get<string[]>(rolesUrl);
  }
}
