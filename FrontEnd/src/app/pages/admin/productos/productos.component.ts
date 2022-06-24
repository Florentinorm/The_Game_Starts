import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import {MatTableDataSource} from '@angular/material/table';

const ventaData: Producto[] = [
  { idPro: 1, nomPro: 'Laptop', precio: 0, cantidad: 2, descripcion: 'Equipo de computo gamer', idEstatus: 1, estatus: 'Activo', nomCat: 'Gamer', idCatPro: 1, idUsuario: 1},
  { idPro: 2, nomPro: 'Teclado', precio: 0, cantidad: 10, descripcion: 'Equipo gamer', idEstatus: 1, estatus: 'Activo', nomCat: 'Gamer', idCatPro: 1, idUsuario: 1},
  { idPro: 3, nomPro: 'Monitor', precio: 0, cantidad: 10, descripcion: 'Equipo gamer', idEstatus: 1, estatus: 'Activo', nomCat: 'Gamer', idCatPro: 1, idUsuario: 1},
  { idPro: 4, nomPro: 'Mouse', precio: 0, cantidad: 10, descripcion: 'Equipo gamer', idEstatus: 1, estatus: 'Activo', nomCat: 'Gamer', idCatPro: 1, idUsuario: 1},
  { idPro: 5, nomPro: 'Computadora', precio: 0, cantidad: 10, descripcion: 'Equipo de computo gamer', idEstatus: 1, estatus: 'Activo', idCatPro: 1, nomCat: '', idUsuario: 1},
  { idPro: 6, nomPro: 'Memoria RAM', precio: 0, cantidad: 10, descripcion: 'Equipo gamer', idEstatus: 1, estatus: 'Activo', nomCat: 'Gamer', idCatPro: 1, idUsuario: 1},
  
];
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  displayedColumns: string[] = ['nomPro', 'precio', 'cantidad', 'estatus'];
  dataSource = new MatTableDataSource(ventaData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
