import { Component, OnInit } from '@angular/core';
import {Zapateria} from '../zapateria';
import {ZapateriaService} from '../zapateria.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  zapaterias: Zapateria[];

  constructor(private zapateriaService: ZapateriaService) { }

  ngOnInit() {
    this.getProductores();
    window.scrollTo(0, 0);
  }

  getProductores(): void{
    this.zapateriaService.getZapaterias().subscribe(zapaterias => this.zapaterias = zapaterias);
  }
}
