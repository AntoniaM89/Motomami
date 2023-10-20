import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Asegúrate de importar ActivatedRoute
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { AtenticacionService } from '../servicios/autenticacion.service'

@Component({
  selector: 'app-casita',
  templateUrl: './casita.page.html',
  styleUrls: ['./casita.page.scss'],
})
export class CasitaPage implements OnInit {
  constructor( private autenticacion: AtenticacionService) {}

  nombre: string= '';

  public usuario = {
    nombre: '',
    contrasena: '',
  };

  ngOnInit() {
    this.nombre = this.autenticacion.nombre;
    console.log('Nombre de usuario recuperado:', this.nombre);
  }
}