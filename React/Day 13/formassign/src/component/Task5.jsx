import { useState } from "react"

const Task5 = () => {
    const [students, setStudents] = useState([
  { id: 1, name: "Ravi", marks: 75, isPassed: true },
  { id: 2, name: "Priya", marks: 35, isPassed: false },
  { id: 3, name: "Kumar", marks: 90, isPassed: true }
]);
    const inceaseMarks =(id)=> {
        setStudents(prev =>
            prev.map(student =>
                student.id === id
                ? { ...student, marks: student.marks + 5 }
                : student
)
);
};

    const toggleResult = (id) => {
        setStudents(prev =>
    prev.map(student =>
        student.id === id
        ? { ...student, isPassed: !student.isPassed }
        :  student
)
);
};
    const deleteStudent = (id) => {
            setStudents(prev =>
        prev.filter(student => student.id !== id)
    );
    };


  return (
    <>
    <div className="p-10">
    <h1>Task5</h1>
    {students.map(e=>(

        <div key={e.id}>
            <p>id:{e.id}</p>
        <p>name:{e.name}</p>
        <p>marks:{e.marks}</p>
        <p>status:{e.isPassed?"pass":"Fail"}</p>
      
 

     <button onClick={()=>inceaseMarks (e.id)}  className="bg-green-400 rounded-2xl justify-center w-30">increase Mark</button><br />
    <button onClick={() => toggleResult(e.id)} className="bg-purple-400 rounded-2xl justify-center w-30">Toggle Result
      </button><br />
      <button onClick={() => deleteStudent(e.id)} className="bg-red-400 rounded-2xl justify-center w-30">Delete Student
      </button>
        </div>
         ))}

         </div>
    </>
  )
}

export default Task5
