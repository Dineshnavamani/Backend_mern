import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   </>
  )
}

export default Layouts
