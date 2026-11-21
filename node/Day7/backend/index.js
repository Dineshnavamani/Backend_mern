import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import database from "../config/db.js"


dotenv.config();
const app =express();
app.use(cors());
app.use(express.json())

app.use("/api/database");

const PORT= process.env.PORT() || 3000

database()

app.listen(PORT,()=>{
    console.log(`server connected successfully on http://localhost:${PORT}`)

})