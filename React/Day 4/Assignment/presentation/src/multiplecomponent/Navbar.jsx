import logo from "../assets/hero.png"
const Navbar =()=>{
    return(
        <>
        <div className="bg-blue-200 flex p-5 justify-evenly items-center">
            <div  className="bg-white w-30 p-2 rounded-3xl flex justify-center ">
                <img src={logo} alt="" />
                
            </div>
            <div className="flex gap-10">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Login</a>
            </div>
            
        </div>
        </>
    )
}
export default Navbar;