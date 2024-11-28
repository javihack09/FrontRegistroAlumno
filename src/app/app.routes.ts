import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { StudentComponent } from './Pages/student/student.component';
import { ClaseComponent } from './Pages/clase/clase.component';


export const routes: Routes = [
    {path:'',component:InicioComponent },
    {path:'Estudiante/:id',component:InicioComponent },
    {path:'Alumno',component:StudentComponent},
    {path:'clase',component:ClaseComponent}

];