import { Component, OnInit } from '@angular/core';
import { Venta } from '../models/venta';
import {MatTableDataSource} from '@angular/material/table';

const ventaData: Venta[] = [

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

