import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../interfaces/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private apiUrl = 'http://localhost:8080/api/v1/material';

  constructor(private http: HttpClient) {}

  getAllMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.apiUrl}/getAll`);
  }

  getMaterialById(materialId: number): Observable<Material> {
    return this.http.get<Material>(`${this.apiUrl}/get/${materialId}`);
  }

  createMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(`${this.apiUrl}/post`, material);
  }

  updateMaterial(materialId: number, material: Material): Observable<Material> {
    return this.http.put<Material>(`${this.apiUrl}/put/${materialId}`, material);
  }

  deleteMaterial(materialId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${materialId}`);
  }
}
