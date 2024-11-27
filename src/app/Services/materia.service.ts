import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { Materia } from '../Models/Materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService{
 
    private http = inject(HttpClient);
    private apiURL:string = appsettings.apiUrl + "Estudiante";
  
    constructor() { }
  
    lista(){
      return this.http.get<Materia[]>(this.apiURL+"/materias");
    }
  
    }

