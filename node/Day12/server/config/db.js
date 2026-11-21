import mongoose from "mongoose";
export  const connectDB = async()=>{
    
    try {
        const condb = await mongoose.connect(process.env.MONGO_URL)
        console.log(`DB connected  ${condb.connection.host}`)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
