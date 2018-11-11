import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Zapateria } from './zapateria';
import { ZAPATERIAS } from './mock-zapaterias';
import { Productos } from './productos';
import { PRODUCTOS } from './mock-productos';
import {Zapato} from './zapato';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})

export class ZapateriaService {

  constructor() {}

  getZapaterias(): Observable<Zapateria[]> {
  	return of(this.shuffleZapateria(ZAPATERIAS));
  }

  getProductosByZapateria(url: string): Observable<Productos>{
  	return of(PRODUCTOS.find(productos => productos.url === url));
  }

  getZapateria(url: string): Observable<Zapateria>{
  	return of(ZAPATERIAS.find(zapateria => zapateria.url === url));
  }

  getDetalleProductoByZapateria(url: string, id: number): Observable<Zapato>{
    return of(PRODUCTOS.find(productos => productos.url === url).lista.find(shoe => shoe.id === id));
  }

  getAllProductos(): Zapato[] {
    let list: Zapato[] = [];
    PRODUCTOS.forEach(element => {
      /*
      let zapTmp = this.shuffleInPlace(element.lista).pop();
      zapTmp['marca'] = element.url;
      list.push(zapTmp);
      */
      this.shuffleInPlace(element.lista).forEach(zapato => {
        zapato['marca'] = element.url;
        list.push(zapato);
      });
    });
    return this.shuffleInPlace(list);
  }

  shuffleInPlace<Zapato>(array: Zapato[]): Zapato[] {
    if (array.length <= 1) return array;

    for(let i : number = array.length - 1; i >= 0; i--){
      let randomItem: number = Math.floor(Math.random() * (i + 1));
      let itemAtIndex: Zapato = array[randomItem];

      array[randomItem] = array[i];
      array[i] = itemAtIndex;
    }
    return array;
  }

  shuffleZapateria<Zapateria>(array: Zapateria[]): Zapateria[] {
    if (array.length <= 1) return array;

    for(let i : number = array.length - 1; i >= 0; i--){
      let randomItem: number = Math.floor(Math.random() * (i + 1));
      let itemAtIndex: Zapateria = array[randomItem];

      array[randomItem] = array[i];
      array[i] = itemAtIndex;
    }
    return array;
  }

}
