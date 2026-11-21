import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
import userRoute from "../routes/userRoutes.js"

dotenv.config();
const app =express();
const PORT= process.env.PORT || 3000;
app.use(cors())
app.use(express.json())
app.use("/api/emp",userRoute)

app.listen(PORT,()=>{
    console.log(`successfully connected on http://localhost:${PORT}`)
})