import First from "./componet/First"
import Fourth from "./componet/Fourth"
import Second from "./componet/Second"
import Third from "./componet/Third"

const App = () => {
  return (
    <>
    <div className="flex flex-col w-50 gap-5">
       <First/>
       <Second/>
       <Third/>
       <Fourth/>
    </div>

    </>
  )
}

export default App
