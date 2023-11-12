import { Component, OnInit } from '@angular/core';
import { StorageService } from '../servicios/storage.service';
import { AtenticacionService } from '../servicios/autenticacion.service';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-tom-viaje',
  templateUrl: './tom-viaje.page.html',
  styleUrls: ['./tom-viaje.page.scss'],
})
export class TomViajePage implements OnInit {
  coordinates: any;
  constructor(private storage: StorageService, private autenticacion: AtenticacionService) { }
  mostrarDestinos: { [key: string]: any } = [];
  async ngOnInit() {
    this.mostrarDestinos = this.storage.mostrarDestinos();
    console.log(this.mostrarDestinos);
    this.coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', this.coordinates);
    };
  }


  
  
  
  


