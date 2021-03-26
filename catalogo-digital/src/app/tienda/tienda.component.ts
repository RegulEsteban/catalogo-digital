import { Component, OnInit } from '@angular/core';
import {ZapateriaService} from '../zapateria.service';
import {Zapateria} from '../zapateria';
import {Zapato} from '../zapato';
import {Globals} from '../globals';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  zapaterias: Zapateria[];
  productos: Zapato[];
  p: 1;

  constructor(private zapateriaService: ZapateriaService, public globals: Globals, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.getProductores();
    this.getAllProductos();
    window.scrollTo(0, 0);
  }

  getProductores(): void{
    this.zapateriaService.getZapaterias().subscribe(zapaterias => this.zapaterias = zapaterias);
  }

  getAllProductos(): void{
    this.productos  = this.zapateriaService.getAllProductos();
  }

  getImageSource(path: string){
    //return this.storage.ref(path).fullPath;

    //return this.downloadURL = this.storage.ref(path).getDownloadURL();
  }
}
