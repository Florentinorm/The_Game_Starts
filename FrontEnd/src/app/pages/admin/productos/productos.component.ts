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
  previewSignsrc: any;
  showPreviewSign = false;
  constructor( private adminSvc: AdminService ) { }
  
  displayedColumns: string[] = ['nomPro', 'precio', 'cantidad', 'detalles', 'editar', 'eliminar'];
  dataSource = new MatTableDataSource(this.productos);

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

}
