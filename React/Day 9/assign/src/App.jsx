import { useState } from "react"

const App = () => {
  const [data,setData]= useState("Arun")
  // const handleclick = () => {
  //   setData("Kumar")

  // }
  const [number,setNumber]= useState(0)
  
  const [boolean,setBoolean] =useState(false)

  const handleshow = () => {
    setBoolean(!boolean);
  };
  const [name,setName]=useState("")
  const handlechange =(e)=>{
    setName(e.target.value)
  }

  const [num,setNum]=useState(0)

  return (
    <>
    <h1>{data}</h1>
    <h1>{number}</h1>
    <h1>{boolean}</h1>
    <h1>your name:{name}</h1>
    <h1>{num}</h1>
    <div>
      
      <button onClick={()=>setData("kumar")}>click</button><br/>
      <button onClick={()=>setNumber(number+1)}>increase</button>
      <button onClick={()=>setNumber(number-1)}>decrease</button>
      <button onClick={()=>setNumber(0)}>reset</button>
      <button onClick={handleshow}>show/hide</button>
      {boolean &&<h2> welcome to react </h2>}
      <input type="text" value={name} placeholder="Enter the name" onChange={handlechange} />

      <button onClick={()=>setNum(num+1)}>Like</button>
    </div>
    </>
  )

}
export default App


// Name Change: Create a state with initial value "Arun". On button click, change the name to "Kumar".
// Counter: Create a number state starting from 0. Add Increase, Decrease, and Reset buttons.
// Show / Hide: Create a boolean state with false. On button click, show/hide the text "Welcome to React".
//Input Name: Create an empty string state. Get a name from an input using onChange and display the entered name below the input.
//Like Button: Create a number state starting from 0. Every time the Like button is clicked, increase the value by 1.