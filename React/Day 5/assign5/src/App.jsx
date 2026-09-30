const App = () => {
   let studentName = "Arun"
    let age = 22
    let course = "React"
    let fees = 15000
    let skills = ["HTML", "CSS", "JavaScript", "React", "Node"];

     let student = {
    name: "Priya",
    age: 21,
    course: "MERN Stack",
    city: "Chennai"
  };

    let students = [
    { id: 1, name: "Arun", course: "React" },
    { id: 2, name: "Priya", course: "Node" },
    { id: 3, name: "Kumar", course: "MongoDB" }
  ];

  return (
    <>
     <h2>taks1</h2>
   <div>
      <h2>{studentName}</h2>

      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>Fees: {fees}</p>
    </div>

     <h2>taks2</h2>
     <div>
      <h2>My Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>

         <h2>taks3</h2>
     <div>
      <h2>Student Details</h2>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>
    </div>

    <h2>taks4</h2>
     <div>
      <h2>Student Details</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            Name: {student.name} - Course: {student.course}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App
