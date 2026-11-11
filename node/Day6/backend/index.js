import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userdata from  './routes/userRoutes.js'

dotenv.config()
app.use(cors)
app.use(express.json)
app.use("/api/data",userdata)
const app =express()

const PORT =process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server connected on .. http://localhost:${PORT}`);
    
})
//http://localhost:5000/api/data
