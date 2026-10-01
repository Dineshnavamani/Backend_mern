import React from 'react'

const Login = () => {
  return (
    <div className='bg-amber-100  flex justify-center items-center p-10 h-100'>
      <div className='bg-white rounded-2xl w-100 p-10 flex flex-col gap -10 h-60'>
        
        <input  placeholder="Enter the name" type="text" className='w-80 p-1 h-10 border'/>
        <input placeholder='Enter the age' type="text"  className='w-80 p-1 h-10 border'/>
        <button className='bg-black border-0 p-1 w-40 text-center text-white'>Login</button>      
      </div>
    </div>
  )
}

export default Login
