import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Zapateria } from './zapateria';
import { ZAPATERIAS } from './mock-zapaterias';
import { Productos } from './productos';
import { PRODUCTOS } from './mock-productos';

@Injectable({
  providedIn: 'root'
})

export class ZapateriaService {

  constructor() {}

  getZapaterias(): Observable<Zapateria[]> {
  	return of(ZAPATERIAS);
  }

  getProductosByZapateria(url: string): Observable<Productos>{
  	return of(PRODUCTOS.find(productos => productos.url === url));
  }

  getZapateria(url: string): Observable<Zapateria>{
  	return of(ZAPATERIAS.find(zapateria => zapateria.url === url));
  }
}
