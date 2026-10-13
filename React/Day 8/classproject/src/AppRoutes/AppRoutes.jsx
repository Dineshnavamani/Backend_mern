import { Route,Routes } from "react-router-dom"
import Women from "../pages/Women"
import Kids from "../pages/Kids"
import Mens from "../pages/Mens"
import Home from "../pages/Home"
import Navbar from "../compoents/Navbar"
const AppRoutes = () => {
  return (
   <>
   <Navbar/>
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/men' element={<Mens />}/>
      <Route path='/women' element={<Women />} />
      <Route path='/kids' element={<Kids />} />
   </Routes>
   </>
  )
}

export default AppRoutes
