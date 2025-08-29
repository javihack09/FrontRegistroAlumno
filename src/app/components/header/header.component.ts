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
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatMenuModule, 
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: any;

  constructor(private router: Router) {}

  irAInicio() {
    this.router.navigate(['/Inicio']);
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  irARegistroAlumno() {
    this.router.navigate(['/Alumno']);
    if (this.sidenav) {
      this.sidenav.close();
    }
  }
}
