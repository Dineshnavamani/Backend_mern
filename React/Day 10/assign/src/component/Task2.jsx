import { useState } from 'react'

const Task2 = () => {

    const [student,setStudent] =useState({
        name: "Arun",
        age: 22,
        course: "React"
    })
    const updateCourse =()=>{
        setStudent({...student,course:"MERN"})
    }
    const addcity=()=>{
        setStudent({...student,city:"Chennai"})
    }

  return (
    <>
    <h1>TASK-2</h1>
    <h1>Name:{student.name}</h1>
    <h1>Age:{student.age}</h1>
    <h1>Course:{student.course}</h1>
    <p>City:{student.city}</p>


    <button onClick={updateCourse}>UpdateCourse</button>
    <button onClick={addcity}>Addcity</button>
    </>
  )
}

export default Task2
