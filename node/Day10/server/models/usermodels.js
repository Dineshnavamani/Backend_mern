import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({

    username:String,
    userage:Number
    
},{timestamps:true})


const users = mongoose.model("users",userSchema);
export default users;
