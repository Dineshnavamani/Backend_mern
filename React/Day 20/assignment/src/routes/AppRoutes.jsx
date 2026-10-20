import React from 'react'
import Layout from '../layout/Layout'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route element={<Layout/>}>
        <Route path={'/home'} element={<Home/>}/>

        </Route>
        <Route path={'/'} element={<Register/>}/>
        <Route path={'/login'} element={<Login/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes
