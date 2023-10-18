import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-casita',
  templateUrl: './casita.page.html',
  styleUrls: ['./casita.page.scss'],
})
export class CasitaPage implements OnInit {

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }


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
}
