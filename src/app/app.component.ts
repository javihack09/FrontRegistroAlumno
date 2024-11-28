import { Component, OnInit } from '@angular/core'; 
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
  pageTitle: string = 'Registro Estudiantes';

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/Alumno') {
          this.pageTitle = 'Registro de Estudiantes';
        } else if (this.router.url === '/') {
          this.pageTitle = 'Lista de Estudiantes';
        } else if (this.router.url.includes('clase')) {
          this.pageTitle = 'Clase';
        }
      }
    });
  }
}
