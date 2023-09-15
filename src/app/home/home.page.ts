import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
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
}



