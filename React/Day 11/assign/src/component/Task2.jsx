import { useState } from "react"


const Task2 = () => {
    const [course,setCourse]=useState(["HTML", "CSS", "JavaScript"])

    const handleclick =()=>{
        setCourse([...course,"React"])
    }

   const handleupdate = ()=>{
        setCourse(course.map((e)=>
            e === "CSS"?"Advance CSS":e
        )
    )

   }
  return (
    <>
    <h1>Task2</h1>

    {course.map((e,i)=>(
        <p key={i}>{e}</p>

    ))}
    <button onClick={handleclick}className="bg-blue-600">Add React</button><br /><br />
    <button onClick={handleupdate}className="bg-blue-600">UpdateCss</button>
    </>
  )
}

export default Task2
