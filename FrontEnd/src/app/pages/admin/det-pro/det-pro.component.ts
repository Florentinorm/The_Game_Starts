import { Component, OnInit } from '@angular/core';
import { Categoria, Producto } from '../models/producto';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Subject, takeUntil } from 'rxjs';
import { UsuarioId } from '../models/Usuario';

@Component({
  selector: 'app-det-pro',
  templateUrl: './det-pro.component.html',
  styleUrls: ['./det-pro.component.css']
})
export class DetProComponent implements OnInit {
  productos: Producto = {};
  private destroy$ = new Subject<any>();
  idPro:any = '';
  nombre: any = '';
  categorias:Categoria[]=[];
  constructor(private adminSvc: AdminService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.idPro = this.route.snapshot.paramMap.get('id');
    this.datos(this.idPro);
    this.categoria();
  }

  datos(id: number){
    this.adminSvc.producto(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((producto: Producto) => {
        this.productos = producto;
        this.usuario(this.productos.id_usuario);
      })
  }

  categoria() {
    this.adminSvc.categoriaProductos()
      .pipe(takeUntil(this.destroy$))
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias;
      })
  }

  usuario(id: any){
    this.adminSvc.usuario(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((usuario: UsuarioId) => {
        this.nombre = usuario.nombre;
      })
  }

}
