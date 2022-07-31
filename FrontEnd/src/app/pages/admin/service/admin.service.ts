import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { first, catchError, tap, map } from 'rxjs/operators';

import { Producto } from '../models/producto';
import { Venta } from '../models/venta';
import { environment } from 'src/environments/environment';

import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) { }

  productos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${environment.API_URL_ADMIN}/pro`)
    .pipe(catchError((error)=>this.handlerError(error)));
  }

    /**
   * @description MANEJA LOS ERRORES DEL SISTEMA
   * @param error 
   * @returns 
   */

     handlerError(error: any): Observable<never>{
      let errorMessage = "Ocurrio un error";
    
     if(error.error)  errorMessage = `${error.error.message}`;
      else errorMessage = `${error.message}`;
    
     // this.snackbar.open(errorMessage,'',{
       // duration: 5*1000,
        //panelClass:['error-snackbar'], 
        //horizontalPosition: 'right',
        //verticalPosition: 'top'
      //})
      return throwError(errorMessage);
    }

}
