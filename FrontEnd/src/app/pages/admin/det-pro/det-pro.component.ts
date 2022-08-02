import { Component, OnInit } from '@angular/core';
import { Categoria, Producto } from '../models/producto';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-det-pro',
  templateUrl: './det-pro.component.html',
  styleUrls: ['./det-pro.component.css']
})
export class DetProComponent implements OnInit {
  productos: Producto = {};
  private destroy$ = new Subject<any>();
  idPro:any = '';
  categorias:Categoria[]=[];
  constructor(private adminSvc: AdminService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.idPro = this.route.snapshot.paramMap.get('id');
    this.datos(this.idPro);
    this.categoria();
  }

  datos(id: number){
    console.log(id);
    this.adminSvc.producto(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((producto: Producto) => {
        this.productos = producto;
      })
  }

  categoria() {
    this.adminSvc.categoriaProductos()
      .pipe(takeUntil(this.destroy$))
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias;
      })
  }

}
