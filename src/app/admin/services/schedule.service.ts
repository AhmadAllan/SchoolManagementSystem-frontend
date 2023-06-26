import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../interfaces/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = 'http://localhost:8080/api/v1/schedule';

  constructor(private http: HttpClient) {}

  getAllSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.apiUrl}/getAll`);
  }

  getScheduleById(scheduleId: number): Observable<Schedule> {
    return this.http.get<Schedule>(`${this.apiUrl}/get/${scheduleId}`);
  }

  createSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(`${this.apiUrl}/post`, schedule);
  }

  updateSchedule(scheduleId: number, schedule: Schedule): Observable<Schedule> {
    return this.http.put<Schedule>(`${this.apiUrl}/put/${scheduleId}`, schedule);
  }

  deleteSchedule(scheduleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${scheduleId}`);
  }
}
