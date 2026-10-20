import React, { useState } from 'react'

const Employee = () => {

    const [employee,setEmployee]=useState({
        name:"",
        department:"",
        salary:"" 
    })
    const [employees,setEmployees]=useState([])

    
  const handlechange =(e)=>{
    setEmployee({...employee,[e.target.name]:e.target.value})

  }
  const handleadd=(e)=>{
    e.preventDefault()
    setEmployee((p)=>({...p,employees}))

    setEmployee({name:"",department:"",salary:""})
  }

  return (
   <>
   <input type="text" name="name" onChange={handlechange} placeholder='Enter The Name'/>
    <input type="text" name="department" onChange={handlechange} placeholder='Enter The Department'/>
    <input type="number" name="salary" onChange={handlechange} placeholder='Enter The Salary'/>
    <button onClick={handleadd}>Add</button>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
            </tr>

        </thead>
        <tbody>
            <tr>


            </tr>
        </tbody>

    </table>
   </>
  )
}

export default Employee

  
  