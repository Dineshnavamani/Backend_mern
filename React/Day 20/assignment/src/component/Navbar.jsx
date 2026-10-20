import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <>
    <div className='bg-amber-200 flex p-10 gap-20  justify-around  items-center '>
        <div>
            LOGO
        </div>
        <div className='flex gap-20'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/'}>Register</Link>
            <Link to={'/login'}>Login</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
