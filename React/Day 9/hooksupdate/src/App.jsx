import { useState } from "react"


const App = () => {
 
  // console.log('running');
  
  // let a = 10
  
  let [a,setA] = useState([1,2,3,4,5])

  // let [b,setB]=useState([1,3,5,7])
  
  // setB(p=>([...p,9]))

  const [obj,setObj] = useState({name:"React"})

  const copy = [...a]

  const handleclick = ()=>{
    
   const datas = {...obj,name:"Node"}

   setObj(datas)
  
    
  }



  return (
    <>
    <h1>{a}</h1>
    <div>
      {copy.map((e,i)=>(
        <p key={i}>{e}</p>
      ))}
    </div>

    <div>
      <h1>{obj.name}</h1>
    </div>
    <button onClick={handleclick}>CLick Me</button>
    </>
  )
}

export default App