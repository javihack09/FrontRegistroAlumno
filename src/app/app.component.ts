import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet, HeaderComponent, FooterComponent, MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'RegistroEstudiantes';
  pageTitle: string = 'Registro Estudiantes';
  showLayout = false;
  private popStateListener: any;

  constructor(private router: Router) {

  }

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
        else if (this.router.url === '/Inicio' ) {
          this.showLayout = true;
        }
      }

      this.popStateListener = (event: PopStateEvent) => {
      this.showLayout = false;
    };

    window.addEventListener('popstate', this.popStateListener);

    });
  }

   ngOnDestroy() {
    window.removeEventListener('popstate', this.popStateListener);
  }
}
