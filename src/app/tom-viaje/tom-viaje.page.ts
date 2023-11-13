import { Component, OnInit } from '@angular/core';
import { StorageService } from '../servicios/storage.service';
import { AtenticacionService } from '../servicios/autenticacion.service';
import { Geolocation } from '@capacitor/geolocation';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-tom-viaje',
  templateUrl: './tom-viaje.page.html',
  styleUrls: ['./tom-viaje.page.scss'],
})
export class TomViajePage implements OnInit {
  coordinates: any;
  //@ts-ignore
  map: mapboxgl.Map;

  constructor(private storage: StorageService, private autenticacion: AtenticacionService) {}

  mostrarDestinos: { [key: string]: any } = [];

  async ngOnInit() {
    this.mostrarDestinos = this.storage.mostrarDestinos();
    console.log(this.mostrarDestinos);

    this.coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', this.coordinates);

    if (this.coordinates && this.coordinates.coords) {
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.coordinates.coords.longitude, this.coordinates.coords.latitude],
        zoom: 16,
        accessToken: 'pk.eyJ1IjoiYW50b25pYTg5IiwiYSI6ImNsb3czM2hibjBlaXIycXFteml0MXZvNHAifQ.rv_0tetno62zXFX989Kzew',
      });
    } else {
      console.error('Error: No se pudo obtener la posición actual.');
    }
  }
  
}
