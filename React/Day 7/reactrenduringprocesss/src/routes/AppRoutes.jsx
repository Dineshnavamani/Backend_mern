import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Help from '../pages/Help'
import Layout from '../component/Layout'
import Register from '../pages/Register'
import Login from '../pages/Login'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>

      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/help' element={<Help />} />

      </Route>
       <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />



    </Routes>
  )
}

export default AppRoutes
