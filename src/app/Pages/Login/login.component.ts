import { Component,inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegitroUsuario } from '../../Models/RegistroLogin';
import { RegistroLogin } from '../../Services/RegistroLogin.service'

@Component({
  selector: 'app-login',
  imports: [FormsModule,MatSelectModule,NgIf,MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   mostrarModal: boolean = false;
   nombreCompleto: string = '';
   correo: string = '';
   clave: string = '';
   rol: string ='';
   correousuario: string = '';
   password: string = '';
   public nuevoregistro!: RegitroUsuario ;
   private Registro = inject(RegistroLogin);
   private Duplicidad = false;

   constructor(private router:Router, ) {
   
      this.nuevoregistro = {
       nombrecompleto:"",
       correo:"",
       rol:"",
       clave:"",
       idregistro:0         
     };
   
     }

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  iniciarsesion(){

    this.Registro.iniciosesion(this.correousuario,this.password).subscribe({
        next: (respuesta) =>{

          if(respuesta.id>0)
          {
            alert("inicio correcto")

            localStorage.setItem('miDato', respuesta.id.toString());
            this.router.navigate(['/Inicio']);
          }
          else{
            alert("usuario o contraseña incorrecta")
          }

        }
    })


  }

crearusuario(){
    this.nuevoregistro.nombrecompleto = this.nombreCompleto ;
    this.nuevoregistro.correo = this.correo ;
    this.nuevoregistro.rol = this.rol;
    this.nuevoregistro.clave = this.clave;
    
    this.Registro.Duplicidad(this.correo).subscribe({
        next: (respuesta) =>{

          if(respuesta.duplicidad)
     {
      alert("El Correo ya existe en el sistema")
      this.cerrarModal();
     }
     else{
          
    this.Registro.RegistrarUsuario(this.nuevoregistro).subscribe({
      next: (respuesta) => {
        this.nuevoregistro.idregistro = respuesta.id;

        localStorage.setItem('miDato', respuesta.id.toString());

        alert("Registro Creado Exitosamente");
        this.cerrarModal();
      },
      error: (error) => {
        alert("Ocurrio un error");
      }
    });
    
  }
        }})

     

}

}
