export interface Usuarios {
    correo: string;
    nombre: string;
    contrasena: string;
    id: number;
    tipo: boolean;
}

export interface Direcciones {
    geometry: {
        type: string;
        coordinates: number[]; // Ajusta según tu estructura de datos
    };
    id : number;
}

export interface Viajes {
    precio: string;
    hora: string;
    conductorCorreo: string;
    direccion: Direcciones;
    id: number;
}

export interface Data {
    usuarios: Usuarios[];
    viajes: Viajes[];
}
