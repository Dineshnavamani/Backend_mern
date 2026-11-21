import mongoose from "mongoose";
import { Schema } from "mongoose";

const studentSchema = new mongoose.Schema({
    studentId:String,
    studentname:String,
    studentdept:String,
    studentemail:String
   
},{timestamps:true})
const studentModel =mongoose.model("studentschemas",studentSchema)
export default studentModel