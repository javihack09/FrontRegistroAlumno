import { Component, inject, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EstudianteService } from '../../Services/estudiante.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clase',
  imports: [MatCardModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './clase.component.html',
  styleUrl: './clase.component.css',
})
export class ClaseComponent implements OnInit {
  @Input('clase') claseEstudiante!: string;

  private estudianteServicio = inject(EstudianteService);
  public listEstudiantes: any = [];
  public displayedColumns: string[] = [
    'nombreAlumno',
    'nombreMateria',
    'nombreProfesor',
  ];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.claseEstudiante = params['clase'];
      if (this.claseEstudiante) {
        this.obtenerEstudiantes();
      }
    });
  }

  obtenerEstudiantes() {
    this.estudianteServicio.Clase(this.claseEstudiante).subscribe({
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

  irAInicio(): void {
    const miDato = localStorage.getItem('miDato');
    console.log(miDato);

    this.router.navigate(['/Estudiante', parseInt(miDato!)]);
  }
  constructor(private router: Router, private route: ActivatedRoute) {}
}
