import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { Estudiante } from '../Models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private http = inject(HttpClient);
  private apiURL:string = appsettings.apiUrl + "Estudiante";

  constructor() { }

  lista(){
    return this.http.get<Estudiante[]>(this.apiURL+"/lista");
  }

  
}
