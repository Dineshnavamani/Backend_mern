import React, { useMemo, useState } from 'react'

const calculateDouble=(num)=>{

  console.log("Calculation running...");   
let result = num * 2;
  for(let i=0;i<1000000;i++){
    result= num*2;
  }
  return result;

}
const App = () => {
  const [number,setNumber]=useState("");
  const [dark,setDark]=useState(false)

  const double =useMemo(()=>{
    return  calculateDouble(number)
  },[number])
  return (
    <>
    
    <div  
       style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        minHeight: "100vh",
        padding: "30px"
      }}
    >
    <input type="number" placeholder='Enter The Number' onChange={(e)=>setNumber(Number(e.target.value))} />
    <h1>Double:{double}</h1>
    <button onClick={() => setDark(!dark)}>Themechange</button>
    </div>
    </>
  )
}

export default App
