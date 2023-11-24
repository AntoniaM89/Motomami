export interface Usuario {
    correo: string;
    nombre: string;
    contrasena: string;
    tipo: boolean;
}

export interface Direccion {
    type: string;
    features: Feature[];
  }
  
  export interface Feature {
    type: string;
    geometry: Geometry;
    properties: Properties;
  }
  
  export interface Geometry {
    type: string;
    coordinates: number[];
  }
  
  export interface Properties {
    nombre: string;
    // otras propiedades si es necesario
  }
  
  

export interface Viaje {
    precio: string;
    hora: string;
    conductorCorreo: string;
    direccion: Direccion;
}

export interface Data {
    usuarios: Usuario[];
    viajes: Viaje[];
}



