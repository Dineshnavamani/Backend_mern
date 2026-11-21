import mongoose from "mongoose";
import studentModel from "../models/usermodels.js";

export const studentData = async(req,res)=>{
    try {
        const {studentId,studentname,studentdept,studentemail}=req.body
        const dbstore =await studentModel.create({studentId,studentname,studentdept,studentemail})

        res.status(200).json({msg:"successfully added",data:dbstore})
    } catch (error) {
        res.status(400).json({msg:"error..."})
    }
}
export const stdvalidate = async(req,res)=>{
    try {
        const dbstore =await studentModel.find();
          res.status(200).json({msg:"successfully added",data:dbstore})
        
    } catch (error) {
        res.status(400).json({msg:"error..."})

    }

}
export const stdupdate = async(req,res)=>{
    try {
        const {studentId}=req.params
        const dbstore =await studentModel.findOne({studentId});
        const{studentname,studentdept,studentemail}=req.body
        const adding = {...dbstore,studentname,studentdept,studentemail}
       
          res.status(200).json({msg:"successfully updated",data:dbstore })

        
    } catch (error) {
        res.status(400).json({msg:"error..."})

    }

}
 