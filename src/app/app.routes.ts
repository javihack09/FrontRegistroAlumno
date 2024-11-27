import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { StudentComponent } from './Pages/student/student.component';


export const routes: Routes = [
    {path:'',component:InicioComponent },
    {path:'Home',component:InicioComponent },
    {path:'Alumno',component:StudentComponent }

];