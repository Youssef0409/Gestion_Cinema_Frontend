import { Injectable } from '@angular/core';
import { Salle } from '../model/salle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionSalleService {
  private apiUrl = 'http://localhost:8010/Cinema_Gestion/v1/salle';

  constructor(private http: HttpClient) { }

  getAllSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(`${this.apiUrl}/All`);
  }

  getSalleById(id: number): Observable<Salle> {
    return this.http.get<Salle>(`${this.apiUrl}/${id}`);
  }

  createSalle(salle: Salle): Observable<Object> {
    return this.http.post<Salle>(`${this.apiUrl}/create`, salle);
  }

  updateSalle(id: number, salle: Salle): Observable<Object> {
    return this.http.put<Salle>(`${this.apiUrl}/${id}`, salle);
  }

  deleteSalle(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}