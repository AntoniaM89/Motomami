import { Component, OnInit } from '@angular/core';
import { DbService } from '../servicios/db.service';
import { Observable } from 'rxjs';
import { Viaje } from '../interfaces/idb';

@Component({
  selector: 'app-ped-viaje',
  templateUrl: './ped-viaje.page.html',
  styleUrls: ['./ped-viaje.page.scss'],
})
export class PedViajePage implements OnInit {
  
  viajes: Observable<Viaje[]> = new Observable<Viaje[]>();  // Inicializado en el constructor

  constructor(private viajeService: DbService) { }

  ngOnInit() {
    this.viajes = this.viajeService.obtenerViajes();
  }
}
