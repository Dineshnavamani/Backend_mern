import mongoose from "mongoose";

const connect_DB= async()=>{ 
try {
    const conn=await mongoose.connect(process.env.MONGO_URL)
    console.log(`mongodb connected successfully ${conn.connection.host}`)
} catch (error) {
    console.log("error",error)
    process.exit(1);
    
}
}



export default connect_DB