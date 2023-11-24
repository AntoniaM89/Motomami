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

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.apiURL}/usuarios`).pipe(
      catchError(this.handleHttpError)
    );
  }

  crearUsuario(newUsuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.apiURL}/usuarios`, newUsuario).pipe(
      catchError(this.handleHttpError)
    );
  }

  obtenerUsuarioPorCorreo(correo: string): Observable<Usuario | null> {
    return this.http.get<Usuario[]>(`${environment.apiURL}/usuarios`).pipe(
      catchError(this.handleHttpError),
      map((usuarios: Usuario[]) => usuarios.find((usuario) => usuario.correo === correo) || null)
    );
  }

  agregarViaje(nuevoViaje: Viaje): Observable<void> {
    return this.http.post<void>(`${environment.apiURL}/viajes`, nuevoViaje).pipe(
      catchError(this.handleHttpError)
    );
  }

  obtenerViajes(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`${environment.apiURL}/viajes`).pipe(
      catchError(this.handleHttpError)
    );
  }

  scheduleTrip(tripDetails: any): Observable<any> {
    return this.http.post(`${environment.apiURL}/usuario`, tripDetails).pipe(
      catchError(this.handleHttpError)
    );
  }

  getPassengerTrips(email: string): Observable<any> {
    return this.http.get(`${environment.apiURL}/viajes?pasajeroCorreo=${email}`).pipe(
      catchError(this.handleHttpError)
    );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<never> {
    console.error('Error en la solicitud HTTP:', error);
    return throwError(error);
  }
}
