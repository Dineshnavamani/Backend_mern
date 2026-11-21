import mongoose from "mongoose";
import express from "express";

export const connectDB = async()=>{
    
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongo connected : ${conn.connection.host}`)
    } catch (error) {
        console.log(`connection faild`,error.message);
        process.exit(1);
    }
}
export default connectDB;
