export interface Estudiante{
  IdEstudiante:number;
  nombreAlumno:string;
  Materia1:number,
  Materia2:number,
  Materia3:number
}

export interface Student {
  id: number;
  name: string;
  selectedSubjects: Subject[];
  programCredits: number;
}

export interface Subject {
  id: number;
  name: string;
  credits: number;
  professor: Professor;
}

export interface Professor {
  id: number;
  name: string;
  subjects: Subject[];
}

export interface verClase{
  nombreAlumno?:string;
  nombreMateria?:string;
  nombreProfesor?:string
}