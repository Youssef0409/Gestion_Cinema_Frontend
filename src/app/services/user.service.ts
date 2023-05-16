import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8010/Cinema_Gestion/v1/utilisateurs';
  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }
}
