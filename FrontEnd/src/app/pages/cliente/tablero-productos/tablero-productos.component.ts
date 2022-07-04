import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tablero-productos',
  templateUrl: './tablero-productos.component.html',
  styleUrls: ['./tablero-productos.component.css']
})
export class TableroProductosComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() producto: any;

  ngOnInit(): void {
  }

  public resolverRuta() {
    const baseUrl = environment.baseUrl;
    return `${baseUrl}/foto_producto/${this.producto.foto}`;
  }

  public detalles() {
    this.router.navigate(["/producto/detalle", this.producto.id])
  }


  // public detalles() {
  //   this.router.navigate(["/caracteristicas_producto"])
  // }


}
