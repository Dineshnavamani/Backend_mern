import './App.css'
import Difficulties from './Components/Difficulties'
import Home from './Components/Home'
import Options from './Components/Options'
import Outlook from './Components/Outlook'
import Roadmap from './Components/Roadmap'

const App = () => {
  const page = window.location.pathname

  if (page === '/outlook') {
    return <Outlook />
  }

  if (page === '/difficulties') {
    return <Difficulties />
  }

  if (page === '/options') {
    return <Options />
  }

  if (page === '/roadmap') {
    return <Roadmap />
  }

  return (
    <Home />
  )
}

export default App
