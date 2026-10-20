import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <div className="flex bg-amber-200 justify-between items-center gap-10 p-10 ">
        <div>
            LOGO
        </div>
        <div className="flex gap-20 ">
            <Link to={'/home'}>Home</Link>
            <Link to={'/'}>Register</Link>
            <Link to={'/login'}>Login</Link>
            
            
        </div>
    </div>
    </>
  )
}

export default Navbar
