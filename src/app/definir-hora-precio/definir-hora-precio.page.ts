import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/auth.service';
import { Direccion, Viaje, Usuario } from '../interfaces/idb';
import { Observable, of } from 'rxjs';
import { DbService } from '../servicios/db.service';

@Component({
  selector: 'app-definir-hora-precio',
  templateUrl: 'definir-hora-precio.page.html',
  styleUrls: ['definir-hora-precio.page.scss'],
})
export class DefinirHoraPrecioPage implements OnInit {
  selectedTime: string = '';
  precio: string = '';
  coordenadas: { lat: number; lng: number }[] = [];

  constructor(
    private router: Router,
    private authService: AutenticacionService,
    private viajeService: DbService
  ) {}

  ngOnInit() {
    // Obtener el estado de la navegación para acceder a las coordenadas
    const estadoNavegacion = this.router.getCurrentNavigation()?.extras.state;

    if (estadoNavegacion && estadoNavegacion['coordenadas']) {
      this.coordenadas = estadoNavegacion['coordenadas'];

      // Ahora, las coordenadas deben estar disponibles para su uso
      console.log('Coordenadas recibidas:', this.coordenadas);
    } else {
      console.error('No se proporcionaron coordenadas en el estado de la navegación.');
    }
  }

  // Función para crear el viaje con la información
  crearViaje() {
    // Obtener el usuario actualmente autenticado (conductor)
    const conductorObservable: Observable<Usuario | undefined> = of(this.authService.getUsuarioActual());

    conductorObservable.subscribe(
      (conductor: Usuario | undefined) => {
        if (conductor) {
          // Crear un objeto Viaje con la información
          const nuevoViaje: Viaje = {
            precio: this.precio,
            hora: this.selectedTime,
            conductorCorreo: conductor.correo,
            direccion: this.convertirCoordenadasADireccionMapbox(this.coordenadas),
          };

          // Imprimir para verificar si se está creando correctamente
          console.log('Nuevo Viaje:', nuevoViaje);

          // Almacenar el nuevo viaje usando el servicio ViajeService
          this.viajeService.agregarViaje(nuevoViaje).subscribe(() => {
            console.log('Viaje almacenado con éxito.');

            // Puedes realizar otras acciones aquí, como navegar a otras páginas
            this.router.navigate(['/otra-pagina']);
          });
        } else {
          console.error('Usuario no autenticado como conductor.');
          // Manejar el caso cuando el usuario no está autenticado (no debería llegar aquí)
        }
      },
      (error: any) => {
        console.error('Error obteniendo usuario actual:', error);
        // Manejar el caso cuando hay un error obteniendo el usuario actual
        console.error('No se pudo crear el viaje. Error:', error);
        // Puedes mostrar un mensaje al usuario o realizar otras acciones en caso de error
      }
    );
  }

  // Función para convertir las coordenadas a una estructura de dirección compatible con Mapbox
  convertirCoordenadasADireccionMapbox(coordenadas: { lat: number; lng: number }[]): Direccion {
    const features = coordenadas.map((coordenada, index) => {
      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [coordenada.lng, coordenada.lat],
        },
        properties: {
          nombre: `Punto ${index + 1}`, // Puedes ajustar el nombre según tus necesidades
        },
      };
    });

    return {
      type: 'FeatureCollection',
      features: features,
    };
  }
}
