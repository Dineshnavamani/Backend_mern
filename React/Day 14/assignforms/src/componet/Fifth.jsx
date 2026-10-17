import { useState } from "react"

const Fifth = () => {
    const [employee,setEmployee]=useState("")
    const [store,setStore]=useState([])
    const [eid,setEid]=useState(null)

    const handlechange =(e)=>{
        setEmployee(e.target.value)

    }
    const handleclick =(e)=>{
        e.preventDefault() 
        setStore((p)=>[...p,employee])
        setEmployee("")
    }

    const handleedit=(element,id)=>{
        setEmployee(element)
        setEid(id)


    }
    const handleupdate=(e)=>{
        e.preventDefault()
        const value = store.map((e,i)=>i==eid?employee:e)
        setStore(value)
        setEmployee("")
        setEid(null)

    }
    
    const handledelete=(index)=>{
        const saves=store.filter((e,i)=>i !==index)
        setStore(saves)
        setEmployee("")
        
    }

  return (
    <>
    <input type="text" value={employee} placeholder="enter the  name"onChange={handlechange} />
    {eid===null?   <button onClick={handleclick}>add</button>:  <button onClick={handleupdate}>update</button>}
     {store.map((e,i)=>(
        <div key={i}>
            <p>{e}</p>
            <button onClick={()=>handleedit(e,i)}>edit</button><br />
            <button onClick={()=>handledelete(i)}>delete</button>
        </div>
     ))}

    </>
  )
}

export default Fifth
