import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { Estudiante, verClase } from '../Models/Estudiante';

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

  crearEstudiante(data:Estudiante){
    return this.http.post(this.apiURL, data);
  }



  
}
