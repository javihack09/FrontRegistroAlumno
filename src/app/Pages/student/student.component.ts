import { Component,inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { MateriaService } from '../../Services/materia.service';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Estudiante } from '../../Models/Estudiante';
import { EstudianteService } from '../../Services/estudiante.service';



@Component({
  selector: 'app-student',
  imports: [MatCardModule,MatTableModule,MatIconModule,MatButtonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  public newEstudiante!: Estudiante;
  nombreEstudiante: string = '';
  private estudianteServicio = inject(EstudianteService);

  selectedCount = 0;
  minSelection = 3;
  maxSelection = 3;
  showError = false;
  seleccionados: number[] = [];
  nombresRepetidos: string[] = [];

  private materiaServicio = inject(MateriaService);
  
  public listMateria!:any[];

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
    console.log(this.listMateria);
    
  }

  constructor(private router:Router, ) {

   this.obtenerMaterias();

   this.newEstudiante = {
    IdEstudiante: 0,        
    nombreAlumno: "",        
    Materia1: 0,             
    Materia2: 0,             
    Materia3: 0              
  };

  }

  onCheckboxChange(materia: any, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.selectedCount++;
      materia.selected = true;
    } else {
      this.selectedCount--;
      materia.selected = false;
    }

    this.validateSelection();
  }

  validateSelection() {
    this.showError = this.selectedCount < this.minSelection || this.selectedCount > this.maxSelection;
  }

  getSelectedValues(): number[] {
    return this.listMateria
      .filter((materia) => materia.selected) // Filtra los seleccionados
      .map((materia) => materia.idMaterias); // Devuelve el IdMaterias de cada uno
  }

  validarForm(){
    this.validateSelection()
    if(this.showError!=true){
      this.seleccionados = this.getSelectedValues();
      let bandera: any = this.validarMaterias(this.seleccionados);
      console.log(this.seleccionados);
      
      if(bandera==false){
        this.crearEstudiante();
        this.router.navigate(['/']);
      }else{
        alert('ocurrio un error')
        
      }
      
    }else{
      alert("Por favor selecciona como minimo o maximo 3 materias y ingresa tu nombre completo, GRACIAS.")
      
    }

  }

  irARegistroAlumno(): void {
    this.router.navigate(['/Alumno']);
  }

  irAInicio(): void {
    this.router.navigate(['/']);
  }

  validarMaterias(seleccionados: number[]): boolean {

    const profesores = this.listMateria.filter(materia =>
      seleccionados.includes(materia.idMaterias)
    );


    const idProfesorSet = new Set();
    console.log(idProfesorSet);
    
    const hayRepetidos = profesores.some(materia => {
      if (idProfesorSet.has(materia.idProfesor)) {
        console.log(profesores);
        
        alert('Se encontró un profesor repetido: '+ materia.nombreProfesor);
        return true; 
      }
      idProfesorSet.add(materia.idProfesor);
      return false;
    });
  
    console.log('¿Hay profesores repetidos?', hayRepetidos);
    return hayRepetidos; 
  }

  displayedColumns: string[] = ['nombreMateria', 'nombreProfesor', 'checkbox'];

  crearEstudiante(){
    this.newEstudiante.nombreAlumno = this.nombreEstudiante;
    this.newEstudiante.Materia1 = this.seleccionados[0];
    this.newEstudiante.Materia2 = this.seleccionados[1];
    this.newEstudiante.Materia3 = this.seleccionados[2];

    this.estudianteServicio.crearEstudiante(this.newEstudiante).subscribe({
      next: (respuesta) => {
        alert("Registro Creado Exitosamente");
      },
      error: (error) => {
        alert("Ocurrio un error");
      }
    });
    
  }

  




}