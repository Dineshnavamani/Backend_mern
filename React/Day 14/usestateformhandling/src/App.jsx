import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("");

  const [students, setStudents] = useState([]);

  // Get input value
  const handleChange = (e) => {
    setName();
  };e.target.value

  // Add value to array
  const handleAdd = () => {           

    if (name.trim() === "") {
      alert("Enter Student Name");
      return;
    }

    setStudents((prev) => [...prev, name]);

    setName("");
  };

  return (
    <div>

      <h2>Student Form</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={handleChange}
      />

      <button onClick={handleAdd}>
        Add Student
      </button>

      <h3>Student List</h3>

      {students.map((student, index) => (
        <p key={index}>
          {student}
        </p>
      ))}

    </div>
  );
};

export default App;