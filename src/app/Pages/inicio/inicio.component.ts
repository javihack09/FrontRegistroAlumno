import { Component,inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EstudianteService } from '../../Services/estudiante.service';
import { Estudiante, verClase } from '../../Models/Estudiante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [MatCardModule,MatTableModule,MatIconModule,MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  private estudianteServicio = inject(EstudianteService);
  public listEstudiantes:verClase[] = [];
  public displayedColumns:string[] = ['nombreAlumno','nombreMateria','nombreProfesor','accion'];

  obtenerEstudiantes(){
    this.estudianteServicio.lista().subscribe({
      next:(data)=>{
        if(data.length > 0){
          this.listEstudiantes = data
          console.log(this.listEstudiantes);
          
        }
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  irARegistroAlumno(): void {
    this.router.navigate(['/Alumno']);
  }

  irAInicio(): void {
    this.router.navigate(['/']);
  }


  constructor(private router:Router) {

   this.obtenerEstudiantes();

  }


}
