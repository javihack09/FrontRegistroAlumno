export interface Estudiante{
  IdEstudiante:number;
  nombreAlumno:string;
  Materia1:number,
  Materia2:number,
  Materia3:number
}

export interface verClase{
  nombreAlumno?:string;
  nombreMateria?:string;
  nombreProfesor?:string
}