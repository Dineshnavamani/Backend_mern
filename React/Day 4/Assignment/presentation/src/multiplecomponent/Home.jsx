import image from "../assets/hero.png";
const Home =()=>{
    return(
        <>
        <div className="flex p-2 justify-center gap-10 ">

            <div className=" bg-blue-50 flex flex-col gap-10 justify-center p-4 font-bold ">
                <div className="">
                    <h1>Simple mobile web designs are <span className="text-red-500 font-bold">Developed here</span>.</h1>
                </div>
                <div>
                    <p> All type of web pages and  web related works are done here.
                         
                    </p>
                </div>
                <div>
                    YOUR IDEA -OUR DESIGN - YOUR WEBPAGE
                </div>
                <div className="flex gap-10 border-rounded">
                    <button className="bg-blue-300 rounded-2xl  justify-center p-2 w-50">Register and use</button>
                    <button className="bg-blue-100 rounded-2xl  justify-center p-2 w-50">Contents here</button>
                </div>
            </div>
            <div className=" bg-blue-30"> 
                <img src={image} alt="" />
            </div>
        </div>
        </>
    )
}
export default Home;
