import {Injectable} from '@angular/core';
import {environment} from "./../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    rutaServidor = environment.API_URL_ADMIN;
  
    constructor() {
    }

    public async formdata(ruta: string, payload: FormData) {
        console.log(payload.get("idProducto"));
        const respuestaRaw = await fetch(this.rutaServidor + ruta, {
          body: payload,
          method: "POST",
        });
        return await respuestaRaw.json();
    }
}
