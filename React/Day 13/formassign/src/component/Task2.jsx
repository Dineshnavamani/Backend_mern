import { useState } from "react"
const Task2 = () => {
    const [isliked,setIsLiked]=useState(false)

    const handleclick =()=>{
        setIsLiked(prev => !prev);
    }

  return (
    <>
    <div className="p-10">
     
    <h2>Task2</h2>
    
    <h1>My post</h1>
    <button onClick={handleclick} className="bg-blue-400 rounded-2xl justify-center w-30">{isliked?"liked":"Like"}</button>
    {isliked && <p>you liked this post</p>}
 
    </div>
    </>
  )
}

export default Task2
