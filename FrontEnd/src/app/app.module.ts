import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/Login-Register/login/login.component';
import { RegistroComponent } from './pages/Login-Register/registro/registro.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { LoadingInterceptor } from "./interceptors/loading-interceptor";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { CreateNewPasswordComponent } from './pages/Login-Register/create-new-password/create-new-password.component';
import { ForgotPasswordComponent } from "./pages/Login-Register/forgot-password/forgot-password.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    AdminComponent,
    ClienteComponent,
    NavigationComponent,
    ForgotPasswordComponent,
    CreateNewPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true} //importamos el intercetor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
