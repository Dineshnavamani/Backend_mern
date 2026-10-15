import Task1 from "./component/Task1"
import Task2 from "./component/Task2"
import Task3 from "./component/Task3"
import Task4 from "./component/Task4"
import Task5 from "./component/Task5"
const App = () => {
  return (
   <>
   <div className="bg-emerald-300 text-center justify-around gap-5px p-20 flex-col " >
      <div className="bg-amber-200 rounded-2xl">
        <Task1/>
      </div>

      <div className="bg-amber-500 rounded-2xl">
        <Task2/>
      </div>

      <div className="bg-amber-800 rounded-2xl">
        <Task3/>
      </div>

      <div className="bg-blue-400 rounded-2xl">
        <Task4/>
      </div>
    
      <div className="bg-amber-200 rounded-2xl">
        <Task5/>
      </div>
   
   
   </div>
   </>
  )
}

export default App
