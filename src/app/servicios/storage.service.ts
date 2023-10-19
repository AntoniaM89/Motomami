import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
  }
  async init(){
    this.storage.create();
  }
  async agregarDato(key: string, valor: any)
  {
    await this.storage.set(key, valor);
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
}
