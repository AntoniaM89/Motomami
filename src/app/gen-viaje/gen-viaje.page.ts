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


  ngOnInit() {
    this.nombre = this.autenticacion.nombre;
    console.log('Nombre de usuario recuperado:', this.nombre);
  }
  async agregarDato( destino:string, precio: string)
  {

    const datos= [{"conductor": this.nombre,
                  "destino":destino, 
                  "precio":precio}];
    await this.storage.agregarDato(datos);
    destino="",
    precio=""

  }
  async buscarDato()
  {
    const key =this.nombre;
    console.log('Realizando búsqueda de datos...');

    if (key === this.nombre){
      console.log('Realizando búsqueda de datos2...');
      const valor= await this.storage.mostrarDato(key);
      this.destino=valor[0].destino;
      this.precio=valor[0].precio;}
      console.log('Destino:', this.destino, 'Precio:', this.precio);
  }
}
