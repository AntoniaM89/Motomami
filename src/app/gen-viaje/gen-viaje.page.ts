import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import {StorageService} from '../servicios/storage.service';
@Component({
  selector: 'app-gen-viaje',
  templateUrl: './gen-viaje.page.html',
  styleUrls: ['./gen-viaje.page.scss'],
})
export class GenViajePage implements OnInit {
  usuarionombre = "";
  precio = "";
  destino = "";
  nombreusuario = "";
  constructor(private router: Router, private activatedRouter: ActivatedRoute, private storage : StorageService) { }
  public usuario={
    nombre:"",
    contrasena:""
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.usuario.nombre = state['usuario'].nombre;
        console.log(this.usuario);
    }
    })
    this.usuarionombre = this.usuario.nombre
  }
  async agregarDato( destino:HTMLInputElement, precio: HTMLInputElement)
  {
    const key: string = this.usuarionombre;
    const datos= [{"destino":destino.value, 
                  "precio":precio.value}];
    await this.storage.agregarDato(key, datos);
    destino.value="",
    precio.value=""

  }
  async buscarDato(key: string= this.usuarionombre)
  {
    const valor= await this.storage.mostrarDato(key);
    this.destino=valor[0].destino;
    this.precio=valor[0].precio;
  }
}
