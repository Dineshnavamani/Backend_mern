import {Route,Routes} from 'react-router-dom'
import Men from '../pages/Men'
import Women from '../pages/Women'
import Kids from '../pages/Kids'
import Allsport from '../pages/Allsport'
const AppRoutes = () => {
  return (
    <>
    <Routes>
        
        <Route path='/' element ={<Allsport />} />
        <Route path='/men' element ={<Men />} />
        <Route path='/women' element ={<Women/>} />
        <Route path='/kids' element ={<Kids />} />
    </Routes>
    </>
  )
}

export default AppRoutes
