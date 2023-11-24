// gen-viaje.page.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

@Component({
  selector: 'app-gen-viaje',
  templateUrl: './gen-viaje.page.html',
  styleUrls: ['./gen-viaje.page.scss'],
})
export class GenViajePage implements OnInit {
  @ViewChild('map', { static: true }) mapElement!: ElementRef;
  map!: mapboxgl.Map;
  coordenadas: { lat: number; lng: number }[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Establece el token de acceso de Mapbox
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiYW50b25pYTg5IiwiYSI6ImNscGJ2MXpzaTBoM3IyaWt4dTRoNXcxNGUifQ.DZVTvPAwr_4SbO0kAuxuyQ';

    this.initializeMap();
    this.addDirections();
  }

  initializeMap() {
    this.map = new mapboxgl.Map({
      container: this.mapElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-79.4512, 43.6568],
      zoom: 13,
    });
  }

  addDirections() {
    const directions = new MapboxDirections({
      accessToken: (mapboxgl as any).accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });

    this.map.addControl(directions, 'top-left');
  }

  guardarCoordenadas() {
    const directionsSource = this.map.getSource('directions');

    if (directionsSource && directionsSource.type === 'geojson') {
      const currentDirections = this.map.querySourceFeatures('directions');

      // Obtener solo las coordenadas y almacenarlas
      const coordinates: { lat: number; lng: number }[] = [];

      for (const direction of currentDirections) {
        const geometry = direction.geometry;

        if (geometry.type === 'Point') {
          // Para un punto, como inicio o destino
          coordinates.push({
            lat: geometry.coordinates[1],
            lng: geometry.coordinates[0],
          });
        } else if (geometry.type === 'LineString') {
          // Para una línea, como una ruta
          for (const position of geometry.coordinates) {
            const latitud = position[1];
            const longitud = position[0];

            coordinates.push({
              lat: latitud,
              lng: longitud,
            });
          }
        } else if (geometry.type === 'MultiLineString') {
          // Para MultiLineString, iterar sobre las coordenadas y aplanarlas
          for (const line of geometry.coordinates) {
            for (const position of line) {
              const latitud = position[1];
              const longitud = position[0];

              coordinates.push({
                lat: latitud,
                lng: longitud,
              });
            }
          }
        }
      }

      if (coordinates.length > 0) {
        // Navegar a la página para definir hora y precio con las coordenadas
        this.router.navigate(['/definir-hora-precio'], {
          state: { coordenadas: coordinates },
        });
      } else {
        console.error('No hay coordenadas para guardar.');
      }
    } else {
      console.error('Error: No se pudo obtener la fuente de direcciones del mapa.');
    }
  }
}
