import React from 'react'
import Counter from './components/Counter'
const App = () => {

  const {value, handlechange}=Counter()
  return (
   <>

   <div>
    <h1>{value}</h1>
    <button onClick={handlechange}>increase</button>

   </div>
   </>
  )
}

export default App
