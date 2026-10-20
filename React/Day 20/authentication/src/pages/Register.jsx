import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [registerdata,setRegisterData]=useState({username:"",userage:"",useremail:""})
  const navigate =useNavigate()

  const handlechange =(e)=>{
    setRegisterData({...registerdata,[e.target.name]:e.target.value})

  }
  const handlesubmit =(e)=>{
    e.preventDefault()
    const getdata = JSON.parse(localStorage.getItem("mydatas")) || []
    const obj={userid:Date.now(),name:registerdata.username,age:registerdata.userage,email:registerdata.useremail}

    getdata.push(obj)

    localStorage.setItem("mydatas",JSON.stringify(getdata))

    alert("successfully Register")
    setRegisterData({username:"",userage:"",useremail:""})
    
    setTimeout(()=>{
      navigate("/login")

    },2000)

  }


  return (
    <>
    <form onSubmit={handlesubmit} className="bg-amber-100 flex flex-col gap-5 justify-center items-center  p-20  ">
    
      <input type="text" onChange={handlechange} name="username" value={registerdata.username} placeholder="Enter The Name" />
      <input type="text" onChange={handlechange} name="userage" value={registerdata.userage} placeholder="Enter The age" />
      <input type="text" onChange={handlechange} name="useremail" value={registerdata.useremail} placeholder="Enter The Email" /> 
      <input type="submit"  value={"Register"} className="bg-black text-white  w-20 rounded-2xl"/>
  
    </form>
    </>
  )
}

export default Register
