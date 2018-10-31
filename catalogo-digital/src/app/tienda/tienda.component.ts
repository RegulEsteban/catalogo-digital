import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
	prueba = '/assets/images/gian-carlo-carrusel.jpg';
  constructor() { }

  ngOnInit() {
  }

}
