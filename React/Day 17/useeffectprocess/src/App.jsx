import { useEffect, useState } from "react"

const App = () => {
  const [count,setCount]=useState(0)
   
    useEffect(()=>{

      const timer =setInterval(()=>{
      
        setCount((p) => p+1)
      },1000);

       return ()=>{
        clearInterval(timer);
       }
       
    },[count]) // with empty array dependency.
  
    

  return (
    <>
    <div>
      <div className="bg-amber-600 text-black p-20 items-center w-10 rounded-2xl ">
     <h1>{count}</h1>
     <button onClick={view}>click</button>
     </div>
    </div>
    
    </>
  )
}

export default App
