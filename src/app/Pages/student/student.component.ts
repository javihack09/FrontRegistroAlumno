import { Component,inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { MateriaService } from '../../Services/materia.service';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-student',
  imports: [MatCardModule,MatTableModule,MatIconModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  public listaMaterias:any;

  private materiaServicio = inject(MateriaService);
  
  public listMateria:any[] = [];

  obtenerMaterias(){
    this.materiaServicio.lista().subscribe({
      next:(data)=>{
        if(data.length > 0){
          this.listMateria = data
          console.log(this.listMateria);
        }
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  constructor(private router:Router) {

   this.obtenerMaterias();

  }


}
