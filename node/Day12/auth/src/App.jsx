import { useState } from "react"


const App = () => {
  const [formsData,setFormsData]=useState({username:"",useremail:"",userpassword:""})

  const handlechange =(e)=>{
  
     setFormsData((p)=>({...p,[e.target.name]:e.target.value}))
     
  };


  const handlesubmit =async (e)=>{
    e.preventDefault()
    try {
      const res =await axios.post("http://localhost:5000/api/auth/register",formsData)
      alert(res.data.msg)
      setFormsData({username:"",useremail:"",userpassword:""})
    } catch (error) {
      alert (error.response.data.msg)
      
    }
  }
 
  return (
    <>
    <form onSubmit={handlesubmit}>
      <input type="text" placeholder="Enter the Name" onChange={handlechange} value={formsData.username}  name="username"/>
      <input type="email" placeholder="Enter the email" onChange={handlechange} value={formsData.useremail}  name="useremail"/>
      <input type="password" placeholder="Enter the password" onChange={handlechange} value={formsData.userpassword}  name="userpassword"/>
      <input type="submit" name="Register"  />
    </form>
    </>
  )
}

export default App
