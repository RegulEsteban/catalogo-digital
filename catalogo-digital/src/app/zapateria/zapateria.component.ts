import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Zapateria } from '../zapateria';
import { Productos } from '../productos';
import { ZapateriaService } from '../zapateria.service';
import { Globals } from '../globals';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-zapateria',
  templateUrl: './zapateria.component.html',
  styleUrls: ['./zapateria.component.css']
})
export class ZapateriaComponent implements OnInit {
	zapateria: Zapateria;
	productos: Productos;
  backUrl: String;
  constructor(
  	private route: ActivatedRoute,
  	private zapateriaService: ZapateriaService,
    private location: Location,
    public globals: Globals,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
  	this.getProductosByZapateria();
  	this.getZapateria();
    window.scrollTo(0, 0);
  }

  getProductosByZapateria(): void{
  	const url = this.route.snapshot.paramMap.get('url');
  	this.zapateriaService.getProductosByZapateria(url).subscribe(productos => this.productos = productos);
  	this.backUrl = this.storage+"/assets%2Fimages%2Flogos%2F"+url+".png?alt=media";
  }

  getZapateria(): void{
  	const url = this.route.snapshot.paramMap.get('url');
  	this.zapateriaService.getZapateria(url).subscribe(zapateria => this.zapateria = zapateria);
  }
}
