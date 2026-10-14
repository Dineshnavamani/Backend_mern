import { useState } from "react";
const Task3 = () => {
    const [show,setShow]=useState(false)
    const showdetials =()=>{
        setShow((prev) =!prev);
    };


  return (
    <>
    <h1>TASK-3</h1>
    <button onClick={showdetials}>{show? "Hide Detials" :"Show Detials"}</button>
    {show ? (
        <div>
          <h2>Student Details</h2>
          <p>Name: Arun</p>
          <p>Age: 22</p>
          <p>Course: React</p>
        </div>
      ) : null}

    </>
  )
}

export default Task3
