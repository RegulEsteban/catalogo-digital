import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment.prod';

import { AppComponent } from './app.component';
import { ProductoresComponent } from './productores/productores.component';
import { ZapateriaComponent } from './zapateria/zapateria.component';
import { TiendaComponent } from './tienda/tienda.component';

import { AppRoutingModule } from './app-routing.module';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import {Globals} from './globals';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoresComponent,
    ZapateriaComponent,
    TiendaComponent,
    DetalleProductoComponent,
    UbicacionComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [ Globals ],
  bootstrap: [AppComponent]
})
export class AppModule { }
