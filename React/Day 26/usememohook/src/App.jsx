import { useState } from "react"

const App = () => {

  const [value,setvalue]=useState("")
  const [theme,setTheme]=useState(true)
  const handlechange =(e)=>{
    setvalue(e.target.value)

  }
  const handletheme =()=>{
    setTheme( p=>!p)

  }



  return (
    <>
    <div  style={{
        backgroundColor: theme ? "#222" : "#fff",
        color: theme ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "30px"
      }}
      >
    
      <h1>{value}</h1>
      <button onClick={handletheme}>Theme change</button>
      <input type="text" onChange={handlechange}  placeholder="Enter something"/>

    </div>
    </>
  )
}

export default App
