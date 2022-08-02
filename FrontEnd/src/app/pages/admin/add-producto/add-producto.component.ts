import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria, Producto } from '../models/producto';
import { AdminService } from '../service/admin.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  
  srcResult: any;
  signupForm!: FormGroup; //hace referencia a nuestro fomulario de registro del html
  categorias: Categoria[] = [];
  private destroy$ = new Subject<any>();
  producto: Producto = {};

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
    this.srcResult  = inputNode.files;
  }

  constructor(private adminSvc: AdminService, private router: Router) {
    
  }

  ngOnInit(): void {
    
    this.categoria();
    this.signupForm = this.createFormGroup(); //llamaremos la funcion createFormGroup para que se inicialice
  }

  categoria() {
    this.adminSvc.categoriaProductos()
      .pipe(takeUntil(this.destroy$))
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias;
      })
  }

  addPro() {
    this.producto = {

      nomProducto : this.signupForm.value.nomPro,
      desProducto : this.signupForm.value.descripcion,
      cantidad : this.signupForm.value.cantidad,
      precio : this.signupForm.value.precio,
      id_usuario : 1,
      id_Estatus : 1,
      id_catProducto : this.signupForm.value.categoria
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
    this.adminSvc.addPro(producto)
    .pipe(takeUntil(this.destroy$))
    .subscribe((productos: any)=>{
      this.addFotos(productos[0].id);
    })
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      nomPro: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), this.noWhitespaceValidator]),
      categoria: new FormControl("", [Validators.required]),
      cantidad: new FormControl("", [Validators.required, Validators.min(10), Validators.max(10000)]),
      precio: new FormControl("", [Validators.required, Validators.min(50), Validators.max(300000)]),
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
