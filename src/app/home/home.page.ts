import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AtenticacionService } from '../servicios/autenticacion.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string= '';
  contrasena: string= '';
  constructor(private router: Router, private Autentificacion: AtenticacionService) {}
  
  usuario = {
  nombre: "",
  contrasena:""
  }
  mensaje: string = "";
  enviar() {
  if (this.usuario.nombre != "") {
    let navigationExtras: NavigationExtras = {
      state: { usuario: this.usuario }
    }
    this.router.navigate(['/casita'], navigationExtras);
  } else {
    this.mensaje = "Debe ingresar sus credenciales";
  }
  }
  async loginusuario(nombre:string, contrasena:string){
    await this. Autentificacion.login(nombre, contrasena);
  }
  async agregarusuario( nombre:string, contrasena: string)
  {
    await this. Autentificacion.register(nombre, contrasena);
    if (this. Autentificacion.autenticado) {
      this.router.navigate(['/casita'], { state: { nombre: this.Autentificacion.nombre } }); 
  }
}
}



