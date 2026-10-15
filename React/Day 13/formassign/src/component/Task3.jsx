import { useState } from "react"
const Task3 = () => {
    const [user, setUser] = useState({
        name: "Rahul",
        age: 22,
        city: "Chennai"
    });
    const changename =()=>{
        setUser(prev => ({...prev,name:"Arjun"}));
    }
    const IncreaseAge =()=>{
        setUser(prev =>({...prev,age:prev.age+1}))
    }
    const chnagecity =()=>{
        setUser(prev => ({...prev,city:"Banglore"}))
    }

  return (
    <>
    <div className="p-10">

 
    <h1>Task3</h1>
        <h1>User Details</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>

        <button onClick={changename}className="bg-blue-400 rounded-2xl justify-center w-30">Change Name</button><br />
        <button onClick={IncreaseAge}className="bg-blue-200 rounded-2xl justify-center w-30">IncreaseAge</button><br />
        <button onClick={chnagecity}className="bg-yellow-400 rounded-2xl justify-center w-30">change City</button>
   
    </div>

    </>
  )
}

export default Task3
