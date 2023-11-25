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
  coordenadas: { lat: number; lng: number, placeName?: string }[] = [];

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
    
      // Imprime la estructura completa de currentDirections en la consola
      console.log('currentDirections:', currentDirections);
    
      // Obtener solo la primera y la última coordenada y almacenarlas
      const coordinates: { lat: number; lng: number, placeName?: string }[] = [];
      
      if (currentDirections.length > 0) {
        // Obtener la primera y la última coordenada
        const firstPoint = this.getFirstCoordinate(currentDirections[0]);
        const lastPoint = this.getLastCoordinate(currentDirections[currentDirections.length - 1]);

        // Obtener el nombre del lugar de la primera coordenada
        const firstPlaceName = currentDirections[0]?.properties?.["text"] ||
                              currentDirections[0]?.properties?.["place_name"];

        // Utilizar aserción de no nulidad para acceder a la propiedad 'place_name' de la última coordenada
        const lastPlaceName = currentDirections[currentDirections.length - 1]?.properties!["text"] ||
                              currentDirections[currentDirections.length - 1]?.properties!["place_name"];

        // Guardar la primera coordenada con nombre del lugar
        if (firstPoint) {
          coordinates.push({ ...firstPoint, placeName: firstPlaceName });
        }

        // Guardar la última coordenada con nombre del lugar
        if (lastPoint) {
          coordinates.push({ ...lastPoint, placeName: lastPlaceName });
        }

        // Agregar un console.log para imprimir las coordenadas en la consola
        console.log('Coordenadas:', coordinates);
    
        // Navegar a la página para definir hora y precio con las coordenadas
        this.router.navigate(['/definir-hora-precio'], {
          state: { coordenadas: coordinates },
        });
      } else {
        console.error('No hay direcciones disponibles para obtener coordenadas.');
      }
    } else {
      console.error('Error: No se pudo obtener la fuente de direcciones del mapa.');
    }
  }

  private getFirstCoordinate(feature: mapboxgl.MapboxGeoJSONFeature): { lat: number; lng: number, placeName?: string } | null {
    const geometry = feature.geometry;
  
    if (geometry.type === 'Point') {
      const coordinates = geometry.coordinates;
  
      if (typeof coordinates[0] === 'number' && typeof coordinates[1] === 'number') {
        return {
          lat: coordinates[0],
          lng: coordinates[1],
        };
      }
    }
  
    return null;
  }

  private getLastCoordinate(feature: mapboxgl.MapboxGeoJSONFeature): { lat: number; lng: number, placeName?: string } | null {
    const geometry = feature.geometry;
  
    if (geometry.type === 'Point') {
      const coordinates = geometry.coordinates;
  
      if (typeof coordinates[0] === 'number' && typeof coordinates[1] === 'number') {
        return {
          lat: coordinates[0],
          lng: coordinates[1],
        };
      }
    } else if (geometry.type === 'LineString' || geometry.type === 'MultiLineString') {
      const coordinates = geometry.coordinates;
  
      if (coordinates.length > 0) {
        const lastPosition = coordinates[coordinates.length - 1];
  
        if (typeof lastPosition[0] === 'number' && typeof lastPosition[1] === 'number') {
          return {
            lat: lastPosition[0],
            lng: lastPosition[1],
          };
        }
      }
    }
  
    return null;
  }
}
