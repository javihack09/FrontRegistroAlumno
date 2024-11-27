import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, // Toolbar de Angular Material
    MatButtonModule,  // Botones de Angular Material
    MatIconModule,    // Iconos de Angular Material
    MatSidenavModule, // Sidenav de Angular Material
    MatMenuModule     // Menú desplegable de Angular Material
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: any;

  constructor(private router: Router) {}

  irAInicio() {
    this.router.navigate(['/']);
    if (this.sidenav) {
      this.sidenav.close(); // Cierra el sidenav si está abierto
    }
  }

  irARegistroAlumno() {
    this.router.navigate(['/Alumno']);
    if (this.sidenav) {
      this.sidenav.close(); // Cierra el sidenav si está abierto
    }
  }

  cerrarSesion() {
    console.log('Cerrar sesión');
    if (this.sidenav) {
      this.sidenav.close(); // Cierra el sidenav si está abierto
    }
  }
}
