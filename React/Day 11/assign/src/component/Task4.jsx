import { useState } from "react"

const Task4 = () => {
    const [employeelist,setEmployeeList]=useState([
  { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Priya", salary: 30000 },
  { id: 3, name: "Kumar", salary: 28000 }
])

    const add= ()=>{
        const newEmployee = {
            id: 4,
            name: "Bala",
            salary: 32000
        }

    setEmployeeList([...employeelist, newEmployee])
    }
    //console.log(employeelist)

    const update=()=>{
        setEmployeeList(prev =>prev.map(e =>
        e.id === 2?
        {...e,salary:35000}:
        e));
    }
  return (
    <>
    <h1>Task4</h1>
    {employeelist.map(e=>(
        <div key={e.id}>
         <p >{e.id}</p>
         <p>{e.name}</p>
         <p>{e.salary}</p>
         </div>
    )) }
      

    <h2>{employeelist.salary}</h2>
    
    <button onClick={add} className="bg-blue-600">Add Employee</button><br /><br />
    <button onClick={update} className="bg-blue-600">Update Salary</button>
     
    </>
  )
}

export default Task4
