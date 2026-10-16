import React, { useState } from 'react'

const Second = () => {
    const [course,setCourse]=useState("")
    const [insert,setInsert]=useState([])
    
    const changes =(e)=>{
        setCourse(e.target.value)
        
    }
    const addingcourse =()=>{

        if (course.trim() ===""){
            alert("Enter the Course Name")
            return;
        }
        setInsert((prev => [...prev,course]))
        setCourse("")
    }
    const deletecourse=(index)=>{
        const updated = insert.filter((items,i)=> i !== index)

        setInsert(updated)

    }

  return (
    <>  
    <div  className=" bg-amber-300  p-10  rounded-2xl justify-center w-150 " >
    <input type="text" value={course} placeholder='Enter The Course Name' onChange={changes} />
    <button onClick={addingcourse} className='bg-black text-white text-center  w-25 rounded-2xl justify-around'>Add course</button>

    {insert.map((e,i)=>(
        <div key={i}>
           <p>{e}</p>
                <h3>Student Course</h3>
             <button onClick={()=>deletecourse(i)}  className='bg-black text-white  w-20 rounded-2xl'>Delete</button>
             </div>
    ))}
   </div>

    </>
  )
}

export default Second
