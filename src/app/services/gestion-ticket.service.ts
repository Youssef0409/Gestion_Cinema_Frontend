import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class GestionTicketService {

  apiUrl='http://localhost:8010/Cinema_Gestion/v1/Ticket'
  constructor(private http: HttpClient) { }
  
  createTicket(ticket: Ticket): Observable<Object> {
    return this.http.post<Ticket>(`${this.apiUrl}/create`, ticket);
  }
  getTicketByUser(id: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/user/${id}`);
  }

  getNumberOfTicketsForUser(userId: number): Observable<number> {
    const url = `${this.apiUrl}/nombre/${userId}`;
    return this.http.get<number>(url);
  }
  
}
