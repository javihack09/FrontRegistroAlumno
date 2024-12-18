import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { Estudiante, verClase } from '../Models/Estudiante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private http = inject(HttpClient);
  private apiURL:string = appsettings.apiUrl + "Estudiante";

  constructor() { }

  lista(){
    return this.http.get<verClase[]>(this.apiURL+"/lista");
  }

  crearEstudiante(data:Estudiante): Observable<{ id: number }>{
    return this.http.post<{ id: number }>(this.apiURL, data);
  }

  obtener(id:number){
    return this.http.get<verClase>(`${this.apiURL}/${id}`);
  }

  Clase(clase:string): Observable<any> {

    const params = new HttpParams().set('clase', clase);

    return this.http.get(this.apiURL+'/clase', { params });
  }



  
}