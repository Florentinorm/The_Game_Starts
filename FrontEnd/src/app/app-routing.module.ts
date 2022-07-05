import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from "./pages/cliente/cliente.component";
import { CheckAdminGuard } from "./guards/check-admin.guard";
import { CheckLoginGuard } from "./guards/check-login.guard";
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from "./guards/check-auth.guard";


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  { path: "cliente", component: ClienteComponent, canActivate: [AuthGuard] },
  { path: "admin", component: AdminComponent , canActivate: [CheckAdminGuard] }, //ADMINISTRADOR
  { path: "login", component: LoginComponent, canActivate: [CheckLoginGuard]},
  { path: "signup", component: RegistroComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
