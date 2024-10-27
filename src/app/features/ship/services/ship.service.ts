import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from '../../../models/Ship.model';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  private apiUrl = 'http://localhost:8080/api/ships';

  constructor(private http: HttpClient) { }

  // Get all ships
  getShips(): Observable<Ship[]> {
    return this.http.get<Ship[]>(this.apiUrl);
  }

  // Get ship by id
  getShipById(id: number): Observable<Ship> {
    return this.http.get<Ship>(`${this.apiUrl}/${id}`);
  }

  // Create a new ship
  createShip(ship: Ship): Observable<Ship> {
    return this.http.post<Ship>(this.apiUrl, ship);
  }

  // Update a ship
  updateShip(currentShipId: number | null, ship: Ship): Observable<Ship> {
    return this.http.put<Ship>(`${this.apiUrl}/${currentShipId}`, ship);
  }

  // Delete a ship
  deleteShip(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
