import { useState } from "react"
const Fourth = () => {
        const [fruit,setFruit]=useState("")
        const [arranged,setArranged]=useState([])
        const [editindex,SetEditIndex]=useState(null)

        // const handlechange =(e)=>{
        //     setFruit(e.target.value)
        // }
        const handleclick =()=>{
            if(fruit.trim()===""){
                alert("Enter Any One Fruit Name")
                return;
            }
            setArranged((prev)=>[...prev,fruit])
            setFruit("")

        }
        const handleupdate =(data,id)=>{
            setFruit(data)
            SetEditIndex(id)

        }
        const handlesave=(e)=>{
            e.preventDefault()
            const saves =arranged.map((e,i)=>i==editindex?fruit:e)
            setArranged(saves)
            SetEditIndex(null)
            setFruit("")
        }

        

  return (
    <>
    <div>
        <input type="text" placeholder="Enter the Fruit Name" value={fruit} onChange={(e)=> setFruit(e.target.value)}/>
        
        {editindex==null?<button onClick={handleclick}>Add Fruit</button>:
        <button onClick={handlesave}>Save</button>}

            {arranged.map((e,i)=>(
                <div key={i}>
                    <p>{e}</p>
                    <button onClick={()=> handleupdate(e,i)} >Update</button>

                </div>
            ))}
    </div>    
    </>
  )
}

export default Fourth
