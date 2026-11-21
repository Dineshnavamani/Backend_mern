import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`DB connected on ${conn.connection.host}`)

}catch(error){

    console.log(error.message);
    console.log("errrorr...");
    
    
}

}
export default connectDB