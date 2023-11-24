import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DbService } from 'src/app/servicios/db.service';
import { Usuario } from 'src/app/interfaces/idb';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private usuarioAutenticadoSubject = new BehaviorSubject<boolean>(false);
  usuarioAutenticado$: Observable<boolean> = this.usuarioAutenticadoSubject.asObservable();
  usuarioData: Usuario | undefined;

  constructor(private dbServ: DbService) {
    this.usuarioAutenticadoSubject.next(this.estaAutenticado());
  }

  private obtenerUsuarioAutenticado(correo: string, contrasena: string): Observable<Usuario | undefined> {
    return this.dbServ.obtenerUsuarios().pipe(
      map((usuarios: Usuario[]) => usuarios.find(user => user.correo === correo && user.contrasena === contrasena))
    );
  }

 // En AutenticacionService
iniciarSesion(correo: string, contrasena: string) {
  this.obtenerUsuarioAutenticado(correo, contrasena).subscribe((usuarioEncontrado: Usuario | undefined) => {
    if (usuarioEncontrado) {
      this.usuarioData = usuarioEncontrado;
      this.usuarioAutenticadoSubject.next(true);
      console.log('Inicio de sesión exitoso');
    } else {
      // Manejar el caso de usuario no encontrado
      this.usuarioAutenticadoSubject.next(false);
      console.log('Usuario no encontrado');
    }
  });
}

getUsuarioActual(): Usuario | undefined {
  return this.usuarioData;
}

getUsuarioAutenticadoObservable() {
  return this.usuarioAutenticadoSubject.asObservable();
}

  
  cerrarSesion(): void {
    this.usuarioAutenticadoSubject.next(false);
    this.usuarioData = undefined;
  }

  estaAutenticado(): boolean {
    return this.usuarioAutenticadoSubject.getValue();
  }
}
