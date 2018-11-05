import { Component, OnInit } from '@angular/core';
import {ZapateriaService} from '../zapateria.service';
import {Zapateria} from '../zapateria';
import {Zapato} from '../zapato';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  zapaterias: Zapateria[];
  productos: Zapato[];

  constructor(private zapateriaService: ZapateriaService) { }

  ngOnInit() {
    this.getProductores();
    this.getAllProductos();
  }

  getProductores(): void{
    this.zapateriaService.getZapaterias().subscribe(zapaterias => this.zapaterias = zapaterias);
  }

  getAllProductos(): void{
    this.productos  = this.zapateriaService.getAllProductos();
  }
}
