import Header from "./component/Header";
import About from "./multiplecomponent/About";
import Footer from "./multiplecomponent/Footer";
import Home from "./multiplecomponent/Home";
import Navbar from "./multiplecomponent/Navbar";

const App=()=>{
  return(
    <>
    <Header/>
    <Navbar/>
    <Home/>
    <About/>
    <Footer/>
    </>
  )
}
export default App;
