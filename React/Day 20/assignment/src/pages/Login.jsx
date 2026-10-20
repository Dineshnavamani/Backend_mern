import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [logindata,setLoginData]=useState({useremail:"",userpassword:""})
    const handlechange =(e)=>{
        setLoginData({...logindata,[e.target.name]:e.target.value})

    }
    const handlesubmit =(e)=>{
        e.preventDefault()
        const getdata=JSON.parse(localStorage.getItem("assigns"))
       // console.log(getdata);
       
       const findUser=getdata.find((e)=>e.email===logindata.useremail && e.password === logindata.userpassword)
       //console.log(findUser);
       
       if(!findUser){
        alert ("You are not a valid user")
        navigate('/')
        return
    }
    localStorage.setItem("isActive",JSON.stringify(findUser))

    navigate("/home")
    setLoginData({useremail:"",userpassword:""})




        
    }

  return (
    <>
    <div className='bg-amber-300 h-100'>
    <form onSubmit={handlesubmit} className='bg-gray-500 p-10 flex flex-col items-center gap-4 '>

    <input type="email" name='useremail' value={logindata.useremail} placeholder='Enter The Email' onChange={handlechange}/>
    <input type="password" name='userpassword' value={logindata.userpassword} placeholder='Enter The Password' onChange={handlechange}/>
    <input type="submit" value={"Login"}  className='bg-black text-amber-50 rounded-2xl p-3 items-center'/>

    </form>
      </div>
    </>
  )
}

export default Login
