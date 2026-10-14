
import { useState } from "react";

const ArrayState=()=> {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  
  const addReact = () => {
    setSkills([...skills, "React"]);
  };


  const updateJavaScript = () => {
    setSkills(
      skills.map((skill) =>
        skill === "JavaScript"
          ? "Advanced JavaScript"
          : skill
      )
    );
  };

  return (
    <div>
      <h1>My Skills</h1>

        {skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}

      <button onClick={addReact}>
        Add React
      </button>

      <button onClick={updateJavaScript}>
        Update JavaScript
      </button>
    </div>
  );
}

export default ArrayState;
