import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import student from "./routes/userRoutes.js"
import connectDB from "./config/db.js"

dotenv.config()
const app=express();
connectDB()
app.use(cors());
app.use(express.json());
app.use("/api/student",student)

const PORT =process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`server connected on http://localhost:${PORT}`)
    
})