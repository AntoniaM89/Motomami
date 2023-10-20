import { Injectable } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private data: { [key: string]: any } = [];
  constructor(private storage: Storage) {
    this.init();
  }
  async init(){
    this.storage.create();
  }
  async agregarDato( valor: any)
  {
    let key = await this.storage.length()+1;
    await this.storage.set(key.toString(), valor);
  }
  async mostrarDato(key: string)
  {
    return await this.storage.get(key);
  }
  listarDato()
  {
    let listado: string[] = [];
    this.storage.forEach((v,k) => {listado.push(v);})
    return listado
  }
  eliminarDato(key: string)
  {
    this.storage.remove(key)
  }
  mostrarDestinos(): any {
    const resultadosDestinos: { [key: string]: any } = {};
    for (const clave in this.data) {
      if (clave.includes('destinos')) {
        resultadosDestinos[clave] = this.data[clave];
      }
    }
    return resultadosDestinos;
  }
}

