import { useState } from "react"

const Task1 = () => {

    const [employee,setEmployee]=useState({name:"Arun",salary:25000})

    const increaseSalary = ()=>{
        setEmployee({...employee,
            salary:employee.salary+5000})
        
    }
    

  return (
    <>
    <div>
    <h1>Task1</h1>
    <p>Name:{employee.name}</p>
    <p>Salary:{employee.salary}</p>

    <button onClick={increaseSalary} className="bg-blue-600">Increase Salary</button><br />
    </div>
    </>
  )
}

export default Task1
