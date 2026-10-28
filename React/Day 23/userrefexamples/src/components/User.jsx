import { useContext, useState } from 'react'
import UseContext from '../context/Usecontext'

const User = () => {
    const data=useContext(UseContext)
  return (
   <>
   <div>
    <h1>{data.name}</h1>
    <h2>{data.dept}</h2>
   </div>
   </>
  )
}

export default User
