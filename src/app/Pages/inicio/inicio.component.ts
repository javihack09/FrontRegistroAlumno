import { Component, inject, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EstudianteService } from '../../Services/estudiante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [MatCardModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit {
  @Input('id') idEstudiante!: number;

  private estudianteServicio = inject(EstudianteService);
  public listEstudiantes: any = [];
  public displayedColumns: string[] = [
    'nombreAlumno',
    'nombreMateria',
    'nombreProfesor',
    'accion',
  ];

  ngOnInit(): void {
    const miDato = localStorage.getItem('miDato');

    if (miDato) {
      this.idEstudiante = parseInt(miDato);
      this.obtenerEstudiantes();
    }
  }

  obtenerEstudiantes() {
    if (this.idEstudiante === undefined) {
      const miDato = localStorage.getItem('miDato');
      this.idEstudiante = parseInt(miDato!);
    }
    this.estudianteServicio.obtener(this.idEstudiante).subscribe({
      next: (data) => {
        if (data) {
          this.listEstudiantes = data;
          console.log(this.listEstudiantes);
        }
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  irARegistroAlumno(): void {
    this.router.navigate(['/Alumno']);
  }

  irAInicio(): void {
    const miDato = localStorage.getItem('miDato');
    console.log(miDato);

    this.router.navigate(['/Estudiante', miDato]);
  }

  clase(materia: string): void {
    this.router.navigate(['/clase'], { queryParams: { clase: materia } });
  }

  constructor(private router: Router) {}
}
