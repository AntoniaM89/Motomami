import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import {StorageService} from '../servicios/storage.service';
import { AtenticacionService } from '../servicios/autenticacion.service'
@Component({
  selector: 'app-gen-viaje',
  templateUrl: './gen-viaje.page.html',
  styleUrls: ['./gen-viaje.page.scss'],
})
export class GenViajePage implements OnInit {
  nombre = "";
  precio = "";
  destino = "";
  constructor(private router: Router, private activatedRouter: ActivatedRoute, 
              private storage : StorageService, private autenticacion: AtenticacionService) { }
  public usuario={
    nombre:"",
    contrasena:""
  }

  ngOnInit() {
    this.nombre = this.autenticacion.nombre;
    console.log('Nombre de usuario recuperado:', this.nombre);
  }
  async agregarDato( destino:HTMLInputElement, precio: HTMLInputElement)
  {
    const key= this.nombre;
    const datos= [{"destino":destino.value, 
                  "precio":precio.value}];
    await this.storage.agregarDato(key, datos);
    destino.value="",
    precio.value=""

  }
  async buscarDato(key: string= this.nombre)
  {
    const valor= await this.storage.mostrarDato(key);
    this.destino=valor[0].destino;
    this.precio=valor[0].precio;
  }
}
