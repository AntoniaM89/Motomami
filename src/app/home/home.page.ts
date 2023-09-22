import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private storage: Storage) {
    this.storage.create();
  }
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
  this.storage.set
}
}



