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

  producto(): Observable<Producto[]>{
    console.log(environment.API_URL_ADMIN + "/pro");
    return this.http.get<Producto[]>(environment.API_URL_ADMIN + "/pro", { responseType: "json" })
    .pipe(
      tap((_) => console.log("test")),
      catchError(
        this.errorHandlerService.handleError<Producto[]>("Productos", [])
      )
    );
  }
}
