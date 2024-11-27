import { Component, OnInit } from '@angular/core'; // Incluye OnInit
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'RegistroEstudiantes';
  pageTitle: string = 'RegistroEstudiantes';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Suscribirse a los eventos de navegación
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Cambiar el título basado en la URL actual
        if (this.router.url === '/Alumno') {
          this.pageTitle = 'Registro de Estudiantes';
        } else if (this.router.url === '/') {
          this.pageTitle = 'Lista de Estudiantes';
        }
      }
    });
  }
}
