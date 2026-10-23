import { useEffect, useState } from "react"

const App = () => {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)

      return () => {
        clearInterval(timer)
      }
    }
  }, [isRunning])

  const  handleReset = () => {
    
    setIsRunning(false)
    setSeconds(0)
  }

  return (
    <>
      <h1>{seconds} seconds</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>

      <button onClick={() => setIsRunning(false)}>Stop</button>

      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
