import { Component, OnInit } from '@angular/core';
import {ProductosService} from "../../services/productos.service";
import {ActivatedRoute} from "@angular/router";
import {Producto} from "../../services/producto";
import {CarritoService} from "../../services/carrito.service";
import {DataSharingService} from "../../services/data-sharing.service";
import {environment} from "../../../../environments/environment";
@Component({
  selector: 'app-detalle-de-producto',
  templateUrl: './detalle-de-producto.component.html',
  styleUrls: ['./detalle-de-producto.component.css']
})
export class DetalleDeProductoComponent implements OnInit {

  public producto = {
    id: 0,
    fotos: [],
    nombre: "",
    descripcion: "",
    precio: "",
  };
  public fotoSeleccionada!: string;
  public indiceSeleccionado = 0;
  public yaExiste!: boolean ;

  constructor(private carritoService: CarritoService, private productosService: ProductosService, private activatedRoute: ActivatedRoute, private dataSharingService: DataSharingService) {

  }

public resolverFoto (foto: any) {
  const baseUrl = environment.baseUrl;
  return `${baseUrl}/foto_producto/${foto}`;
}

public resolveFoto(foto: any){
  const baseUrl = environment.baseUrl;
  return `${baseUrl}/foto_producto/${foto}`;
}



  public seleccionarImagen(indice: number ) {
    this.indiceSeleccionado = indice;
    this.fotoSeleccionada = this.producto.fotos[this.indiceSeleccionado];
    console.log(this.fotoSeleccionada);
  }

  public async quitarDelCarrito() {
    const {id} = this.producto;
    const respuesta = await this.carritoService.quitarProducto(id);
    console.log({respuesta})
    this.refrescarEstado();
  }

  public async agregarAlCarrito() {
    const {id} = this.producto;
    const respuesta = await this.carritoService.agregarAlCarrito(id);
    console.log({respuesta})
    this.refrescarEstado();
    console.log(this.agregarAlCarrito);
  }

  async refrescarEstado() {
    const id = this.producto.id;
    this.yaExiste = await this.carritoService.existeEnCarrito(id);
    // Comunicación entre componentes
    this.dataSharingService.changeMessage("car_updated");
  }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.producto = await this.productosService.obtenerProductoConFotosPorId(id);
    if (this.producto.fotos.length >= 0) {
      this.seleccionarImagen(0);
    }
    this.refrescarEstado();
  }
}
