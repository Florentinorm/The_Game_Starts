import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import {MatTableDataSource} from '@angular/material/table';
import { AdminService } from '../service/admin.service';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  private destroy$ = new Subject<any>();
  productos: Producto[] = []; //variable de tipo que esatrá vacia en arreglo

  constructor( private service: AdminService, private adminSvc: AdminService) { }
  
  productoData: Producto[]=[];
  displayedColumns: string[] = ['nomPro', 'precio', 'cantidad', 'estatus', 'editar', 'eliminar'];
  dataSource = new MatTableDataSource(this.productoData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.adminSvc.productos()
    .pipe(takeUntil(this.destroy$))
    .subscribe((productos: Producto[])=>{
      console.log('entro 2')
      this.productos = productos;
      console.log(productos);
    })
  }

}
