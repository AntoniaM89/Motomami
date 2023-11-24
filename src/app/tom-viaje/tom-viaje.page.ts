import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tom-viaje',
  templateUrl: './tom-viaje.page.html',
  styleUrls: ['./tom-viaje.page.scss'],
})
export class TomViajePage implements OnInit {
  coordinates: any;
  //@ts-ignore
  map: mapboxgl.Map;

  constructor() {}

  async ngOnInit() {
    this.coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', this.coordinates);

    if (this.coordinates && this.coordinates.coords) {
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.coordinates.coords.longitude, this.coordinates.coords.latitude],
        accessToken: 'pk.eyJ1IjoiYW50b25pYTg5IiwiYSI6ImNscGJ2MXpzaTBoM3IyaWt4dTRoNXcxNGUifQ.DZVTvPAwr_4SbO0kAuxuyQ',
        zoom: 16,
      });

      // Inicializar la biblioteca de direcciones
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving-traffic',
        controls: { instructions: true },
      });

      // Añadir control de direcciones al mapa
      this.map.addControl(directions, 'top-left');
    } else {
      console.error('Error: No se pudo obtener la posición actual.');
    }
  }
}
