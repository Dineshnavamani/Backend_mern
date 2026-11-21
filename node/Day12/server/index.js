import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoute from "./routes/authRoute.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app=express();
// console.log(process.env)

connectDB()
app.use(cors());
app.use(express.json())
app.use("/api/auth",authRoute)

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server connected on http://localhost:${PORT}`)
})
//http://localhost:5000/api/auth