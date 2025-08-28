import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { StudentComponent } from './Pages/student/student.component';
import { ClaseComponent } from './Pages/clase/clase.component';
import { LoginComponent } from './Pages/Login/login.component'

export const routes: Routes = [
    {path:'Login',component:LoginComponent },
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    {path:'Inicio',component:InicioComponent },
    {path:'Estudiante/:id',component:InicioComponent },
    {path:'Alumno',component:StudentComponent},
    {path:'clase',component:ClaseComponent}

];