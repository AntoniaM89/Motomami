import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; 
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { AtenticacionService } from '../servicios/autenticacion.service'

@Component({
  selector: 'app-casita',
  templateUrl: './casita.page.html',
  styleUrls: ['./casita.page.scss'],
})
export class CasitaPage implements OnInit {
  constructor( private autenticacion: AtenticacionService, private router: Router) {}

  nombre: string= '';
  

  ngOnInit() {
    this.nombre = this.autenticacion.nombre;
    console.log('Nombre de usuario recuperado:', this.nombre);
  }

  nav (){
    this.nombre = this.autenticacion.nombre;
    if (this.nombre){
      this.router.navigate(['/gen-viaje'], { state: { nombre: this.nombre } });
      console.log('Nombre de usuario establecido:', this.nombre);}
    else{
      console.log('No se encontro ningun nombre:');
    }
  }
}