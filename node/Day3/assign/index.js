import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {fileshandles} from "./fileshandle/handlefiles.js"

dotenv.config();
const app=express()
app.use(cors)
app.use(express.json())

const PORT =process.env.PORT || 3000;
fileshandles()


app.listen (PORT,()=>{
    console.log(`server connected on .. http://localhost:${PORT}`)
})