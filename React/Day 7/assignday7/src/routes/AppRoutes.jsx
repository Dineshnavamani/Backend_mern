import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from '../component/Contact'
import Home from '../component/Home'
import About from '../component/About'

const AppRoutes = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default AppRoutes
