import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cinema } from '../model/cinema';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GestionCinemaService {
  private baseURL = 'http://localhost:8010/Cinema_Gestion/v1';
  constructor(private httpClient: HttpClient) {}

  getCinemaList(): Observable<Cinema[]> {
    return this.httpClient.get<Cinema[]>(`${this.baseURL}/cinema/All`);
  }

  createCinema(cinema: Cinema): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/cinema/create`, cinema);
  }
  updateCinema(id: number, cinema :Cinema): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/cinema/${id}`,cinema);
  }

  getCinemaById(id: number): Observable<Cinema> {
    return this.httpClient.get<Cinema>(`${this.baseURL}/cinema/${id}`);
  }

  deleteCinema(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/cinema/delete/${id}`);
  }
}
