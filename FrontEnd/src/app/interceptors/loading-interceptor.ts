import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class LoadingInterceptor implements HttpInterceptor {

    //contaremos las peticiones que llegarán en el interceptor y les daremos salida acada uno de ellos.
    private countrequest = 0;
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //this.spinner.show(); //muestra el spinner
        this.countrequest++; //inicia el conteo
        return next.handle(req)
            .pipe(finalize ( () => {
                this.countrequest--; //una vez que finaliza le quitamos el countrequest
                if (!this.countrequest) {
                    //this.spinner.hide(); //ocultamos el spinner una vez finalizado
                }
            }))
    }
    
}