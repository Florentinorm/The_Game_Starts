import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import {MatTableDataSource} from '@angular/material/table';
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  constructor( private service: AdminService) { }
  
  productoData: Producto[]=[];
  displayedColumns: string[] = ['nomPro', 'precio', 'cantidad', 'estatus', 'editar', 'eliminar'];
  dataSource = new MatTableDataSource(this.productoData);
  productos: any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.dataProducto();
  }
  
  dataProducto(){
    this.productos = this.service.producto();
    console.log(this.productos);
  }
}
