import { Component, OnInit } from '@angular/core';
import { Venta } from '../models/venta';
import { AdminService } from '../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-det-ventas',
  templateUrl: './det-ventas.component.html',
  styleUrls: ['./det-ventas.component.css']
})
export class DetVentasComponent implements OnInit {
  venta:Venta = {};
  private destroy$ = new Subject<any>();
  idVenta:any = '';
  constructor(private adminSvc: AdminService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.idVenta = this.route.snapshot.paramMap.get('id');
    this.datos(this.idVenta);
  }

  datos(id: number){
    this.adminSvc.venta(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((venta: Venta) => {
        console.log(venta);
        this.venta = venta;
      })
  }

}

