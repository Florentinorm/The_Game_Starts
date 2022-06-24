import { Component, OnInit } from '@angular/core';
import { Venta } from '../models/venta';
import {MatTableDataSource} from '@angular/material/table';

const ventaData: Venta[] = [
  {idPro: 1, name: 'Laptop', canVenta: 1, nomUsuario: 'Tino', idUsuario: 1, desVenta: '', nomVenta: '', totalVenta: 0},
  {idPro: 2, name: 'Teclado', canVenta: 4, nomUsuario: 'Antonio', idUsuario: 3, desVenta: '', nomVenta: '', totalVenta: 0},
  {idPro: 3, name: 'Monitor', canVenta: 6, nomUsuario: 'Joan', idUsuario: 2, desVenta: '', nomVenta: '', totalVenta: 0},
  {idPro: 4, name: 'Mouse', canVenta: 9, nomUsuario: 'Tino', idUsuario: 1, desVenta: '', nomVenta: '', totalVenta: 0},
  {idPro: 5, name: 'Computadora', canVenta: 3, nomUsuario: 'Eva', idUsuario: 4, desVenta: '', nomVenta: '', totalVenta: 0},
  {idPro: 6, name: 'Memoria RAM', canVenta: 2, nomUsuario: 'Antonio', idUsuario: 3, desVenta: '', nomVenta: '', totalVenta: 0},
  
];

@Component({
  selector: 'app-det-ventas',
  templateUrl: './det-ventas.component.html',
  styleUrls: ['./det-ventas.component.css']
})
export class DetVentasComponent implements OnInit {
  displayedColumns: string[] = ['nomUsuario', 'name', 'canVenta', 'totalVenta'];
  dataSource = new MatTableDataSource(ventaData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

