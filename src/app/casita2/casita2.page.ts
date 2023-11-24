import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/auth.service';
import { DbService } from '../servicios/db.service';
import { Usuario } from 'src/app/interfaces/idb';

@Component({
  selector: 'app-casita2',
  templateUrl: './casita2.page.html',
  styleUrls: ['./casita2.page.scss'],
})
export class Casita2Page implements OnInit {
  userData: Usuario | null = null;

  constructor( 
    private authService: AutenticacionService,
    private sdbService: DbService
  ) {}

  ngOnInit() {
    if (this.authService.estaAutenticado()) {
      console.log('Usuario autenticado');
      const correoUsuario = this.authService.usuarioData?.correo;

      if (correoUsuario) {
        console.log('Correo del usuario:', correoUsuario);

        this.sdbService.obtenerUsuarioPorCorreo(correoUsuario).subscribe(
          (data: Usuario | null) => {
            this.userData = data;
          },
          (error) => {
            console.error('Error al obtener datos del usuario:', error);
          }
        );
      } else {
        console.error('Correo del usuario es undefined');
      }
    } else {
      console.error('Usuario no autenticado');
    }
  }
}