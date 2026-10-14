import { useState } from "react"

const Task5 = () => {
  const [password,setPassword]=useState("react123")
  const [showpassword,setShowPassword]=useState(false)

  const show =()=>{
    setShowPassword(prev=>!prev);
  }
  return (
    <>
    <h1>Task5</h1>
    <p>password:{showpassword?password:"........."}</p>
    <button onClick={show} className="bg-blue-700">{showpassword ? "Hide Password" : "Show Password"}</button>

    </>
  )
}

export default Task5
