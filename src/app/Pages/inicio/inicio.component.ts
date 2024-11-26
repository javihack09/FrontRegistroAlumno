import { Component,inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EstudianteService } from '../../Services/estudiante.service';
import { Estudiante } from '../../Models/Estudiante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [MatCardModule,MatTableModule,MatIconModule,MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  private estudianteServicio = inject(EstudianteService);
  public listEstudiante:Estudiante[] = [];
  public displayedColumns:string[] = ['nombreAlumno','materia1','materia2','materia3'];

  obtenerEstudiantes(){
    this.estudianteServicio.lista().subscribe({
      next:(data)=>{
        if(data.length > 0){
          this.listEstudiante = data
        }
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }


  constructor(private router:Router) {

   this.obtenerEstudiantes();

  }


}
