import { Component, OnInit } from '@angular/core';
import {Zapato} from '../zapato';
import {ActivatedRoute} from '@angular/router';
import {ZapateriaService} from '../zapateria.service';
import {Globals} from '../globals';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  shoe: Zapato;

  constructor(
    private route: ActivatedRoute,
    private zapateriaService: ZapateriaService,
    public globals: Globals
  ) { }

  ngOnInit() {
    this.getShoe();
    window.scrollTo(0, 0);
  }

  getShoe(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    const url = this.route.snapshot.paramMap.get('url');

    this.zapateriaService.getDetalleProductoByZapateria(url, id).subscribe(shoe => this.shoe = shoe);
  }
}
