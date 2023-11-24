import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/idb';
import { DbService } from 'src/app/servicios/db.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  newUsuario: Usuario = {
    correo: "",
    nombre: "",
    contrasena: "",
    tipo: false // Establecer el valor predeterminado del booleano
  };

  correoError: string = '';
  nombreError: string = '';
  contrasenaError: string = '';

  constructor(private dbServ: DbService, private router: Router) { }

  ngOnInit() {
  }

  crearUsuario() {
    // Resetear mensajes de error
    this.correoError = '';
    this.nombreError = '';
    this.contrasenaError = '';

    // Validar campos
    let validacionExitosa = true;

    if (!this.newUsuario.correo) {
      this.correoError = 'Correo electrónico es requerido';
      validacionExitosa = false;
    } else if (!this.validarFormatoCorreo(this.newUsuario.correo as string)) {
      this.correoError = 'Correo electrónico no tiene un formato válido';
      validacionExitosa = false;
    } else {
      this.dbServ.obtenerUsuarios().subscribe({
        next: (response: any) => {
          const usuarioArray = response;

          if (Array.isArray(usuarioArray)) {
            const usuarioExistente = usuarioArray.find((user: any) => user.correo === this.newUsuario.correo);

            if (usuarioExistente) {
              this.correoError = 'Este correo ya está registrado';
              validacionExitosa = false;
            }

            // Continuar con la lógica si es necesario
            if (validacionExitosa) {
              if (!this.newUsuario.nombre) {
                this.nombreError = 'Nombre es requerido';
                validacionExitosa = false;
              }

              if (!this.newUsuario.contrasena) {
                this.contrasenaError = 'Contraseña es requerida';
                validacionExitosa = false;
              }

              if (validacionExitosa) {
                // Si no hay errores, crear el usuario
                this.dbServ.crearUsuario(this.newUsuario).subscribe(() => {
                  this.router.navigateByUrl('/inicio');
                });
              }
            }
          } else {
            console.error('La respuesta del servicio no contiene un array:', response);
          }
        }
      });
    }
  }

  validarFormatoCorreo(correo: string): boolean {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  }
}