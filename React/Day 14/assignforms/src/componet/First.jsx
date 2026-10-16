import React, { useState } from 'react'

const First = () => {
    const [name,setName]=useState("")
    const [student,setStudent]=useState([])

    const handlesubmit =(e)=>{
        setName(e.target.value)
    }
    const handleAdd =()=>{

        if (name.trim() ===""){
            alert("Enter the Name")
            return;
        }
        setStudent((prev => [...prev, name]))

        setName("")
    }


  return (
   <>
    <div className=" bg-amber-300  p-10  rounded-2xl justify-center w-150 ">
        <input type="text" value={name} onChange={handlesubmit} placeholder='Enter Your Name' />
         <button onClick={handleAdd} className='bg-black text-white text-center  w-30 rounded-2xl justify-around text-'>Add Student</button>

    {student.map((data,i)=>(
        <p key={i}>
            {data}
        </p>
    ))}

    </div>
   </>
  )
}

export default First
