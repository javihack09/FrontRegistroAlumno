import { HttpClient, HttpParams  } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { RegitroUsuario } from '../Models/RegistroLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroLogin{
 
    private http = inject(HttpClient);
    private apiURL:string = appsettings.apiUrl + "Estudiante";
  
    constructor() { }
  
    RegistrarUsuario(data:RegitroUsuario): Observable<{ id: number }>{
        return this.http.post<{ id: number }>(this.apiURL+"/RegistroLogin", data);
      }

    Duplicidad(correo:string): Observable<any>{
        return this.http.get(`${this.apiURL+"/Duplicidad?correo="}${correo}` );
      }
    
    iniciosesion(correo:string,clave:string): Observable<any>{
        const response = this.http.get(`${this.apiURL+"/InicioSesion?correo="}${correo}${"&clave="}${clave}`);
        return response
      }
  
    }