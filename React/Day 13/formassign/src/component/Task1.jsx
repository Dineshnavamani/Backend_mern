import { useState } from "react";

const Task1 = () => {
    const [ison,setIsOn]=useState(false)
    
    const togglestatus =()=>{
      setIsOn(prev => !prev );
    }
  
    return (
      <>
      <div className="p-10">
      <h1>Task1</h1>
      <h1>Status:{ison?"ON":"OFF"}</h1>
      
        <button onClick={togglestatus} className="bg-blue-400 rounded-2xl justify-center w-30">{ison?"Turn off":"Turn on"}</button>
       </div>
      
      </>
    )
  }

export default Task1
