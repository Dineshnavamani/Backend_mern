import { useContext, useState } from 'react'
import UseContext from '../context/Usecontext'

const User = () => {
    const data=useContext(UseContext)
  return (
   <>
   <div>
    <h1>Name:{data.name}</h1>
    <h2>dept:{data.dept}</h2>
   </div>
   </>
  )
}

export default User
