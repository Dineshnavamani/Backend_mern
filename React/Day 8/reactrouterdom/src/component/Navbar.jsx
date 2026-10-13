import React from 'react'
import { Link } from 'react-router-dom'
import Allsport from '../pages/Allsport'

const Navbar = () => {
  return (
   <>
   <div className='bg-blue-100 p-2 flex justify-between items-center '>

    <div className='flex gap-5'>
    <Link to={"/"}>Allsport</Link>
      <Link to={"/men"}>Mens</Link>
      <Link to={"/women"} >Women</Link>
      <Link to={"/kids"}>Kids</Link>
      
    </div>

    <div>
      
    <h2>Welcome to the Decathlon</h2>
    </div>

   </div>
   </>
  )
}

export default Navbar
