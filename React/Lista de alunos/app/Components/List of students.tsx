import { Student } from "app/Components/Student";

export function ListStudents(){
    const students =[
        {id:1, Name:"Paulo", Course: "Analise e desenvolvimento de sistemas"},
        {id:2, Name:"Pedro", Course: "Medicina"},
        {id:3, Name:"Carla", Course: "Administração"},
        {id:4, Name:"Maria", Course: "Nutrição"},
        {id:5, Name:"João", Course: "Engenharia Civil"},
        {id:6, Name:"Evelyn", Course: "Arquitetura"},
    ];

    return (
    <div>
      <h1>Lista de alunos</h1>
      {students.map((student) => (
        <Student
          key={student.id}
          Name={student.Name}
          Course={student.Course}
        />
      ))}
    </div>
  );
}
