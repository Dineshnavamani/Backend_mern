import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div>
        <div>
            LOGO
        </div>
        <div>
            <Link to={"/"}>Home</Link>
              <Link to={"/service"}>Service</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          

        </div>
    </div>
    </>
  )
}

export default Navbar