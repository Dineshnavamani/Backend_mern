import mongoose from "mongoose";
import express from "express";
import users from "../models/usermodels.js";
 const insertdata = async(req,res)=>{
    try {
        const {username,userage}= await (req.body)
        res.status(200).json({msg:"saved successfully"})
        
    } catch (error) {
        
        res.status(404).json({msg:"error"})
    }
}

export default insertdata;