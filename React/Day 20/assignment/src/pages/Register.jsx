import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [registerdata,setRegisterdata]=useState({username:"",useremail:"",userpassword:""})
    const navigate=useNavigate()

    const handlechange =(e)=>{
         setRegisterdata({...registerdata,[e.target.name]:e.target.value})


    }
    const handlesubmit =(e)=>{
        e.preventDefault()
        const getdata=JSON.parse(localStorage.getItem("assigns")) || []
        const obj ={userid:Date.now(),name:registerdata.username,email:registerdata.useremail,password:registerdata.userpassword}
        getdata.push(obj)

        localStorage.setItem("assigns",JSON.stringify(getdata))
        alert ("successfully Added")

       
        setRegisterdata({username:"",useremail:"",userpassword:""})
        setTimeout(() => {
            navigate('/login')
        }, 2000);
    }
    


  return (
   <>
   <div className='bg-amber-300 h-100'>
   <form onSubmit={handlesubmit} className='bg-amber-100 flex flex-col border-3 w- 150 p-20 gap-3 justify-center items-center'>
   
    <input type="text" name="username" value={registerdata.username} placeholder='Enter The Name' onChange={handlechange}/>
    <input type="email" name="useremail" value={registerdata.useremail} placeholder='Enter The Email' onChange={handlechange}/>
    <input type="password" name="userpassword" value={registerdata.userpassword} placeholder='Enter The Password' onChange={handlechange}/>
    <input type='submit' value={"Register"} className='bg-black rounded-2xl text-amber-50 p-3'/>

   </form>
   </div>

   </>
  )
}

export default Register
