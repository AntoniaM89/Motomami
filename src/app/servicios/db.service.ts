import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, map } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario, Viaje } from '../interfaces/idb';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private http: HttpClient) {}

  apiURL= 'http://localhost:3000'

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiURL}/usuarios`).pipe(
      catchError(this.handleHttpError)
    );
  }

  crearUsuario(newUsuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiURL}/usuarios`, newUsuario).pipe(
      catchError(this.handleHttpError)
    );
  }

  obtenerUsuarioPorCorreo(correo: string): Observable<Usuario | null> {
    return this.http.get<Usuario[]>(`${this.apiURL}/usuarios`).pipe(
      catchError(this.handleHttpError),
      map((usuarios: Usuario[]) => usuarios.find((usuario) => usuario.correo === correo) || null)
    );
  }

  agregarViaje(nuevoViaje: Viaje): Observable<void> {
    return this.http.post<void>(`${this.apiURL}/viajes`, nuevoViaje).pipe(
      catchError(this.handleHttpError)
    );
  }

  obtenerViajes(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`${this.apiURL}/viajes`).pipe(
      catchError(this.handleHttpError)
    );
  }

  scheduleTrip(tripDetails: any): Observable<any> {
    return this.http.post(`${this.apiURL}/usuario`, tripDetails).pipe(
      catchError(this.handleHttpError)
    );
  }

  getPassengerTrips(email: string): Observable<any> {
    return this.http.get(`${this.apiURL}/viajes?pasajeroCorreo=${email}`).pipe(
      catchError(this.handleHttpError)
    );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<never> {
    console.error('Error en la solicitud HTTP:', error);
    return throwError(error);
  }
}
