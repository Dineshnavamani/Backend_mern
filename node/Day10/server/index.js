import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app =express();

app.use(cors());
app.use(express.json())

connectDB()

app.use("/api/crud",routes)

const PORT =process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server connected on http://localhost:${PORT}`);
    
})
//http://localhost:5000/api/crud