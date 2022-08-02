import { Component, OnInit } from '@angular/core';
import { Venta } from '../models/venta';
import {MatTableDataSource} from '@angular/material/table';
import { AdminService } from '../service/admin.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  ventaData: Venta[] = [];
  private destroy$ = new Subject<any>();
  displayedColumns: string[] = ['nomUsuario', 'name', 'canVenta', 'totalVenta', 'detalles', 'eliminar'];
  dataSource = new MatTableDataSource(this.ventaData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor( private adminSvc: AdminService ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.adminSvc.ventas()
    .pipe(takeUntil(this.destroy$))
    .subscribe((ventas: Venta[])=>{
      this.ventaData = ventas;
      
      this.dataSource = new MatTableDataSource(this.ventaData);
    })
  }

  eliminar(id:number){
    this.adminSvc.eliminarVen(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe((venta: any)=>{
     
      this.listar();
    })
  }


}
