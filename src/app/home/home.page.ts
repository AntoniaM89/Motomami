import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/servicios/db.service';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  errorMessage: string = '';
  credenciales = {
    correo: '',
    contrasena: '',
  };

  constructor(
    private dbServ: DbService,
    private authService: AutenticacionService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.errorMessage = ''; // Limpiar el mensaje de error al intentar iniciar sesión nuevamente

    this.authService.iniciarSesion(this.credenciales.correo, this.credenciales.contrasena);

    this.authService.getUsuarioAutenticadoObservable().subscribe({
      next: (autenticado: boolean) => {
        if (autenticado) {
          console.log('Inicio de sesión exitoso');
          // Verificar el tipo de usuario (conductor o pasajero)
          const usuarioExistente = this.authService.usuarioData;
          if (usuarioExistente?.tipo) {
            // Usuario conductor
            this.router.navigateByUrl('/casita');
          } else {
            // Usuario pasajero
            this.router.navigateByUrl('/casita2');
          }
        } else {
          this.errorMessage = 'Credenciales incorrectas';
        }
      },
      error: (error: any) => {
        console.error('Error durante la autenticación:', error);
        if (error.message === 'Usuario no encontrado') {
          this.errorMessage = 'Usuario no encontrado';
        } else {
          this.errorMessage = 'Error durante la autenticación';
        }
      },
    });
  }
}
