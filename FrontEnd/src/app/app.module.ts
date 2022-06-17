import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule} from "@angular/forms";
import {MatCardMdImage, MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatStepperModule} from "@angular/material/stepper";
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { TableroProductosComponent } from './pages/cliente/tablero-productos/tablero-productos.component';
import { CaracteristicaProductosComponent } from './pages/cliente/caracteristica-productos/caracteristica-productos.component';
import { ProcesoComprasComponent } from './pages/cliente/proceso-compras/proceso-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableroProductosComponent,
    CaracteristicaProductosComponent,
    ProcesoComprasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardMdImage,
    MatSliderModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule, 
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    MatChipsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatBadgeModule,
    MatStepperModule,
    MatProgressBarModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
