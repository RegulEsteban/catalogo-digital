import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TiendaComponent } from './tienda/tienda.component';
import { ZapateriaComponent } from './zapateria/zapateria.component';
import { CommonModule } from '@angular/common';
import {DetalleProductoComponent} from './detalle-producto/detalle-producto.component';

const routes: Routes = [
	{ path: '', redirectTo: '/tienda', pathMatch: 'full' },
	{ path: 'tienda', component: TiendaComponent},
	{ path: 'zapateria/:url', component: ZapateriaComponent},
  { path: 'producto/:url/:id', component: DetalleProductoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
