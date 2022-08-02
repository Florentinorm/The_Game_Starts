import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria, Producto } from '../models/producto';
import { AdminService } from '../service/admin.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-edi-producto',
  templateUrl: './edi-producto.component.html',
  styleUrls: ['./edi-producto.component.css']
})
export class EdiProductoComponent implements OnInit {
  srcResult: any;
  signupForm!: FormGroup; //hace referencia a nuestro fomulario de registro del html
  categorias: Categoria[] = [];
  private destroy$ = new Subject<any>();
  productos: Producto = {};
  producto: Producto = {};
  idPro:any = '';

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
    this.srcResult  = inputNode.files;
    console.log(this.srcResult);
  }

  constructor(private adminSvc: AdminService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.idPro = this.route.snapshot.paramMap.get('id');
    this.datos(this.idPro);
    this.categoria();
    this.signupForm = this.createFormGroup(); //llamaremos la funcion createFormGroup para que se inicialice
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

  ediPro() {
    this.producto = {
      id_producto : this.idPro,
      nomProducto : this.productos.nomProducto,
      desProducto : this.productos.desProducto,
      cantidad : this.productos.cantidad,
      precio : this.productos.precio,
      id_usuario : 1,
      id_Estatus : 1,
      id_catProducto : this.productos.id_catProducto
    }
    this.newPro(this.producto);
  }

  async addFotos(idPro: any){
    const fd = new FormData();
    for (let x = 0; x < this.srcResult.length; x++) {
      fd.append(`foto_${x}`, this.srcResult[x])
    }
    fd.append("idProducto", idPro);
    const respuesta = await this.adminSvc.agregarFotosDeProducto(fd);

  }

  newPro(producto:Producto){
    this.adminSvc.ediPro(producto)
    .pipe(takeUntil(this.destroy$))
    .subscribe((productos)=>{
      console.log(productos);
      this.router.navigate(['/productos']);
    })
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      nomPro: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), this.noWhitespaceValidator]),
      categoria: new FormControl("", [Validators.required]),
      cantidad: new FormControl("", [Validators.required]),
      precio: new FormControl("", [Validators.required]),
      descripcion: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(1000),
        this.noWhitespaceValidator
      ])
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  getErrorMessage(field: string) {
    let message = '';
    var form = this.signupForm.get(field);
    if (form != null) {
      if (form.hasError('required')) {
        message = 'Campo requerido';
      } else if (form.hasError('minlength')) {
        message = 'El mínimo de caracteres son 3';
      } else if (form.hasError('maxlength')) {
        message = 'Excede el máximo de caracteres';
      } else if (form.hasError('email')) {
        message = 'Email incorrecto';
      } else if (form.hasError('whitespace')) {
        message = 'Solo se acepta caracteres sin espacio'
      }
    }
    return message;
  }

  isValidField(field: string) {
    var form = this.signupForm.get(field);
    var flag = false;
    if (form != null) {
      flag = form.touched || form.dirty && !form.valid
    }

    return flag;
  }


}
