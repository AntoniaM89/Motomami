import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import {storage} from './storage.service';
@Component({
  selector: 'app-gen-viaje',
  templateUrl: './gen-viaje.page.html',
  styleUrls: ['./gen-viaje.page.scss'],
})
export class GenViajePage implements OnInit {

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private storage : storage) { }
  public usuario={
    nombre:"",
    contrasena:""
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.usuario.nombre = state['usuario'].nombre;
        this.usuario.contrasena = state['usuario'].contrasena;
        console.log(this.usuario);
    }
    })
    
  }
  async agregarDato( usuarionombre:HTMLInputElement, destino:HTMLInputElement, precio: HTMLInputElement)
  {
    const datos= [{"usuarionombre":usuarionombre.value, "destino":destino.value, "precio":precio.value}];
    await this.storage.aagregarDatos(datos);
  }
  
}
