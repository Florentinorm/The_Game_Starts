import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroProductosComponent } from './pages/cliente/tablero-productos/tablero-productos.component';
import { CaracteristicaProductosComponent } from './pages/cliente/caracteristica-productos/caracteristica-productos.component';
import { ProcesoComprasComponent } from './pages/cliente/proceso-compras/proceso-compras.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { DetVentasComponent } from './pages/admin/det-ventas/det-ventas.component';
import { ProductosComponent } from './pages/admin/productos/productos.component';
import { VentasComponent } from './pages/admin/ventas/ventas.component';
import { AddProductoComponent } from './pages/admin/add-producto/add-producto.component';
import { EdiProductoComponent } from './pages/admin/edi-producto/edi-producto.component';
import { DetProComponent } from './pages/admin/det-pro/det-pro.component';



const routes: Routes = [
  {path: 'home', component: TableroProductosComponent},
  {path: 'caracteristicas_producto', component: CaracteristicaProductosComponent},
  {path: 'homeAdmin', component: AdminComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'detVentas/:id', component: DetVentasComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'addProducto', component: AddProductoComponent},
  {path: 'ediProducto/:id', component: EdiProductoComponent},
  {path: 'producto/:id', component: DetProComponent},
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: '**', redirectTo: "/home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
