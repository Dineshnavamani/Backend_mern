import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='bg-red-600 p-2 flex justify-evenly items-center'>
        <div className='text-white'>
            LOGO
        </div>
        <div className='flex gap-15 text-white'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/help"}>Help</Link>
            <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>

        </div>
    </div>
    </>
  )
}

export default Navbar
