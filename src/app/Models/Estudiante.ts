 export interface Estudiante{
     IdEstudiante:number;
     nombreAlumno:string;
     Materia1:string,
     Materia2:string,
     Materia3:string
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

