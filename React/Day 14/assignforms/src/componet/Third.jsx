import { useState } from "react"
const Third = () => {
    const  [number,setNumber]=useState("")
    const  [storing,setStoring]=useState([])
    
    const handlechange =(e)=>{
      setNumber(e.target.value)
    }
    const  addingArray = ()=>{
      if(number.trim() ===""){
        return;
      } 
      const value =Number(number)

      setStoring((prev)=>[...prev,value])
      setNumber("")
    }

  return (
    <>
    <div className=" bg-amber-300  p-10  rounded-2xl justify-center w-150 ">
    <input type="text" placeholder="Enter the Number" value={number} onChange={handlechange}/>
    <button onClick={addingArray} className="bg-black rounded-2xl w-30 text-white">Add to Array</button>
    {storing.map((e,i)=>(
      <div key={i}>
        <p>{e}</p>
        {e%2==0?"Even":"Odd"}

      </div>
    ))}
    </div>
    
    </>
  )
}

export default Third
