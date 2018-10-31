import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Zapateria } from '../zapateria';
import { Productos } from '../productos';
import { ZapateriaService } from '../zapateria.service';

@Component({
  selector: 'app-zapateria',
  templateUrl: './zapateria.component.html',
  styleUrls: ['./zapateria.component.css']
})
export class ZapateriaComponent implements OnInit {
	zapateria: Zapateria;
	productos: Productos;

  constructor(
  	private route: ActivatedRoute,
  	private zapateriaService: ZapateriaService,
    private location: Location
  ) {}

  ngOnInit(): void {
  	this.getProductosByZapateria();
  	this.getZapateria();
  }

  getProductosByZapateria(): void{
  	const url = this.route.snapshot.paramMap.get('url');
  	this.zapateriaService.getProductosByZapateria(url).subscribe(productos => this.productos = productos);
  }

  getZapateria(): void{
  	const url = this.route.snapshot.paramMap.get('url');
  	this.zapateriaService.getZapateria(url).subscribe(zapateria => this.zapateria = zapateria);
  }
}
