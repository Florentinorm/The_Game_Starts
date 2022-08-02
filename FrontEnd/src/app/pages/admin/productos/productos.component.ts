import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import {MatTableDataSource} from '@angular/material/table';
import { AdminService } from '../service/admin.service';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const helperSvc = new JwtHelperService();
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  private destroy$ = new Subject<any>();
  productos: Producto[] = []; //variable de tipo que esatrá vacia en arreglo
  previewSignsrc: any;
  showPreviewSign = false;
  constructor( private adminSvc: AdminService, private router: Router) { }
  
  displayedColumns: string[] = ['nomPro', 'precio', 'cantidad', 'detalles', 'editar', 'eliminar'];
  dataSource = new MatTableDataSource(this.productos);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.listar();
    this.checkToken();
  }
  
  listar(){
    this.adminSvc.productos()
    .pipe(takeUntil(this.destroy$))
    .subscribe((productos: Producto[])=>{
      this.productos = productos;
      this.dataSource = new MatTableDataSource(this.productos);
    })
  }

  eliminar(id:number){
    this.adminSvc.elimiarPro(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe((productos: any)=>{
      console.log(productos);
      this.listar();
    })
  }

  
  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  isUserAdmin$ = new BehaviorSubject<boolean>(false);
  private token = new BehaviorSubject<string>(''); //recibirá tipo string
  get token$(): Observable<string> {
    //devolverá un observavble de tipo string
    return this.token.asObservable(); //se quedará escuchando el token para verificar cuando hace cambios y se actualice automáticamente
  }

  checkToken() {
    //para este método se utilizará el auth0-angular-jwt
    const token = localStorage.getItem('token'); //obtenemos el token que tenemos guardada en la sesión

    if (token) {
      const isExpired = helperSvc.isTokenExpired(token); //verificamos si el token está expirado
      //si el token esta expirado, entonces seteamos el token - forma alternairia de un if
      isExpired ? this.logout() : this.token.next(token);
      this.isUserAdmin$.next(true);
    } else {
      this.logout();
    }
  }

  logout() {
    localStorage.removeItem('token'); //removemos el token
    this.token.next(''); // seteamos la variable del observable a vacio
    this.isUserLoggedIn$.next(false);
    this.isUserAdmin$.next(false);
    this.router.navigate(['login']); //redirigimos al login
  }

}
