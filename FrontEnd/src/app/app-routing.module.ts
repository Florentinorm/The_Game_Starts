import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroProductosComponent } from './pages/cliente/tablero-productos/tablero-productos.component';
import { ProcesoComprasComponent } from './pages/cliente/proceso-compras/proceso-compras.component';
import { AvisoComponent } from './pages/aviso/aviso.component';
import { DetalleDeProductoComponent } from './pages/cliente/detalle-de-producto/detalle-de-producto.component';


const routes: Routes = [
  {path: 'home', component: TableroProductosComponent},
  {path: 'caracteristicas_producto', component: DetalleDeProductoComponent},
  {path: 'proceso_compra', component: ProcesoComprasComponent},
  {path: 'proceso_compra/carrito', component: ProcesoComprasComponent},
  {path: 'aviso', component: AvisoComponent},
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: '**', redirectTo: "/home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
