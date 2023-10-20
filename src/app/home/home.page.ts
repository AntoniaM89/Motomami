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
  async enviar(nombre:string, contrasena:string){
    await this. Autentificacion.login(nombre, contrasena);
    if(this.Autentificacion.autenticado){
      this.router.navigate(['/casita'], { state: { nombre: this.Autentificacion.nombre } });
    }
    else{
      await this. Autentificacion.register(nombre, contrasena);
      this.router.navigate(['/casita'], { state: { nombre: this.Autentificacion.nombre } });
    }
  }
}



