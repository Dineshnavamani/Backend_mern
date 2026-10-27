import { useRef, useState } from 'react'

const TaskTwo = () => {
    const passwwordref=useRef(null)
    const handleshow =()=>{
        passwwordref.current.type ="text"
    }
    const handlehide =()=>{
        passwwordref.current.type="password"
    }


  return (
    <>
    <input type="password"  ref={passwwordref} placeholder="Enter the password" />
    <button onClick={handleshow}>Show</button>
    <button onClick={handlehide}>Hide</button>

    </>
  )
}

export default TaskTwo
