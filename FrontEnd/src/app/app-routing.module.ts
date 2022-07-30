import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from "./pages/cliente/cliente.component";
import { CheckAdminGuard } from "./guards/check-admin.guard";
import { CheckLoginGuard } from "./guards/check-login.guard";
import { AdminComponent } from './pages/admin/admin.component';

import { LoginComponent } from './pages/Login-Register/login/login.component';
import { RegistroComponent } from './pages/Login-Register/registro/registro.component';
import { AuthGuard } from "./guards/check-auth.guard";
import { ForgotPasswordComponent } from './pages/Login-Register/forgot-password/forgot-password.component';
import { CreateNewPasswordComponent } from './pages/Login-Register/create-new-password/create-new-password.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  { path: "cliente", component: ClienteComponent, canActivate: [AuthGuard] },
  { path: "admin", component: AdminComponent , canActivate: [CheckAdminGuard] }, //ADMINISTRADOR
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
