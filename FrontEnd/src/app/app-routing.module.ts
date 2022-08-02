import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroProductosComponent } from './pages/cliente/tablero-productos/tablero-productos.component';
import { CaracteristicaProductosComponent } from './pages/cliente/caracteristica-productos/caracteristica-productos.component';
import { ProcesoComprasComponent } from './pages/cliente/proceso-compras/proceso-compras.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { ClienteComponent } from "./pages/cliente/cliente.component";
import { CheckAdminGuard } from "./guards/check-admin.guard";
import { CheckLoginGuard } from "./guards/check-login.guard";
import { LoginComponent } from './pages/Login-Register/login/login.component';
import { RegistroComponent } from './pages/Login-Register/registro/registro.component';
import { AuthGuard } from "./guards/check-auth.guard";
import { ForgotPasswordComponent } from './pages/Login-Register/forgot-password/forgot-password.component';
import { CreateNewPasswordComponent } from './pages/Login-Register/create-new-password/create-new-password.component';
import { DetVentasComponent } from './pages/admin/det-ventas/det-ventas.component';
import { ProductosComponent } from './pages/admin/productos/productos.component';
import { VentasComponent } from './pages/admin/ventas/ventas.component';
import { AddProductoComponent } from './pages/admin/add-producto/add-producto.component';
import { EdiProductoComponent } from './pages/admin/edi-producto/edi-producto.component';
import { DetProComponent } from './pages/admin/det-pro/det-pro.component';






const routes: Routes = [
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  },
  { path: "cliente", component: ClienteComponent, canActivate: [AuthGuard] },
  { path: "admin", component: AdminComponent , canActivate: [CheckAdminGuard] }, //ADMINISTRADOR
  {path: 'ventas', component: VentasComponent, canActivate: [CheckAdminGuard]},
  {path: 'detVentas/:id', component: DetVentasComponent, canActivate: [CheckAdminGuard]},
  {path: 'productos', component: ProductosComponent, canActivate: [CheckAdminGuard]},
  {path: 'addProducto', component: AddProductoComponent, canActivate: [CheckAdminGuard]},
  {path: 'ediProducto/:id', component: EdiProductoComponent, canActivate: [CheckAdminGuard]},
  {path: 'producto/:id', component: DetProComponent, canActivate: [CheckAdminGuard]},
  { path: "login", component: LoginComponent, canActivate: [CheckLoginGuard]},
  { path: "signup", component: RegistroComponent },
  { path: "forgot-password", component: ForgotPasswordComponent},
  { path: "create-new-password/:token", component: CreateNewPasswordComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
