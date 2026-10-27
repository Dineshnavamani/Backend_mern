import { useRef, useState } from 'react'

const Taskone = () => {
  const [data,setData]=useState("")
  const nameref=useRef(null)
  const emailref =useRef(null)
  const focusname =()=>{
    nameref.current.focus();
    
  }

   const focusemail =()=>{
    emailref.current.focus();
    
    }
    const  clearinputs =()=>{
        
      nameref.current.value="";
      emailref.current.value="";
    }

    const handlesubmit =(e)=>{

      e.preventDefault()
      alert ("Name:"+nameref.current.value +"    Email:" +emailref.current.value);

    }



  return (
   <>
   <form >

    <input type="text" ref={nameref} placeholder='Enter the Name'/>
     <button onClick={focusname}>Focus Name</button>

    <input type="email" ref={emailref} placeholder='Enter the Email'/>
    <button onClick={focusemail}>Focus Email</button>

    <button onClick={clearinputs}>Clear</button>
    <button onClick={handlesubmit}>Submit</button>


    
   </form>
   </>
  )
}

export default Taskone
