import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../model/film';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionFilmService {

  private apiUrl = 'http://localhost:8010/Cinema_Gestion/v1/film';

  constructor(private http: HttpClient) { }

  getFilmList(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.apiUrl}/All`);
  }

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/${id}`);
  }

  createFilm(film: Film): Observable<Object> {
    return this.http.post<Film>(`${this.apiUrl}/create`, film);
  }

  updateFilm(id: number, film: Film): Observable<Object> {
    return this.http.put<Film>(`${this.apiUrl}/${id}`, film);
  }

  deleteFilm(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
