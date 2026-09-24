import Home from "./component/Home";
import Navbar from "./multiplecomponent/Navbar";
import Homee from "./multiplecomponent/Homee";
import About from "./multiplecomponent/About";
import Footer from "./multiplecomponent/Footer";
import Home1 from "./nestedcomponents/Home1";

function App() {
    return (
        <>
        <Home/>
        <Navbar/>
        <Homee/>
        <About/>
        <Footer/>
        <Home1/>
        </>
    )
}
export default App;